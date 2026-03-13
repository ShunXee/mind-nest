import { NextResponse } from "next/server";

import {
  CHAT_MAX_MESSAGES,
  type ChatMessage,
  buildMindNestSystemPrompt,
} from "@/lib/chat-config";
import type { Locale } from "@/lib/i18n/home-copy";

type ChatRequestBody = {
  locale?: Locale;
  messages?: ChatMessage[];
};

const ALLOWED_ROLES = new Set(["user", "assistant"]);

function normalizeMessages(input: ChatRequestBody["messages"]): ChatMessage[] {
  if (!Array.isArray(input)) return [];

  return input
    .filter(
      (item): item is ChatMessage =>
        Boolean(item) &&
        typeof item.content === "string" &&
        typeof item.role === "string" &&
        ALLOWED_ROLES.has(item.role),
    )
    .map((item) => ({
      role: item.role,
      content: item.content.trim().slice(0, 4000),
    }))
    .filter((item) => item.content.length > 0)
    .slice(-CHAT_MAX_MESSAGES);
}

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const baseUrl = (process.env.DEEPSEEK_BASE_URL ?? "https://api.deepseek.com/v1").replace(/\/$/, "");
  const model = process.env.DEEPSEEK_MODEL ?? "deepseek-chat";

  if (!apiKey) {
    return NextResponse.json({ error: "Missing DEEPSEEK_API_KEY" }, { status: 500 });
  }

  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const locale: Locale = body.locale === "en" ? "en" : "zh-HK";
  const messages = normalizeMessages(body.messages);

  if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
    return NextResponse.json({ error: "The latest message must be from user" }, { status: 400 });
  }

  try {
    const upstream = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.5,
        max_tokens: 900,
        messages: [
          { role: "system", content: buildMindNestSystemPrompt(locale) },
          ...messages,
        ],
      }),
    });

    const data = (await upstream.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
      error?: { message?: string };
    };

    if (!upstream.ok) {
      const message = data?.error?.message ?? "DeepSeek API request failed";
      return NextResponse.json({ error: message }, { status: upstream.status });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json({ error: "Empty response from model" }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Unable to reach DeepSeek API" }, { status: 502 });
  }
}
