import { promises as fs } from "fs";
import path from "path";
import { execFile } from "child_process";
import { promisify } from "util";

const VIDEOS_DIR = path.join(process.cwd(), "public", "videos");
const execFileAsync = promisify(execFile);

const DESCRIPTION_OVERRIDES: Record<string, string> = {
  "8 Ways to Improve Parent Child Relationship.mp4":
    "Practical ways to strengthen trust and connection between caregivers and children in daily routines.",
  "Communicating with Your Child- What Would You Say.mp4":
    "A scenario-based communication demo showing how wording can reduce conflict and improve cooperation.",
  "Communicating with Your Child.mp4":
    "Core communication principles for caregivers, including active listening and emotional validation.",
  "Communicating with Your Child：Play Time.mp4":
    "How to use play as a bridge for connection and guidance, especially when direct conversation is difficult.",
  "How to Talk to Kids About Sex | Parents.mp4":
    "Age-appropriate approaches for discussing body boundaries, safety, and sexuality with children.",
  "Using time-out.mp4":
    "How to use time-out with clear structure and emotional support, avoiding shame-based discipline.",
};

const DURATION_OVERRIDES: Record<string, string> = {
  "8 Ways to Improve Parent Child Relationship.mp4": "8:24",
  "Communicating with Your Child- What Would You Say.mp4": "6:50",
  "Communicating with Your Child.mp4": "9:12",
  "Communicating with Your Child：Play Time.mp4": "7:35",
  "How to Talk to Kids About Sex | Parents.mp4": "10:03",
  "Using time-out.mp4": "8:47",
};

const INSTRUCTOR_OVERRIDES: Record<string, string> = {
  "8 Ways to Improve Parent Child Relationship.mp4": "Dr. Lee",
  "Communicating with Your Child- What Would You Say.mp4": "Therapist Cheung",
  "Communicating with Your Child.mp4": "Prof. Wong",
  "Communicating with Your Child：Play Time.mp4": "Lau, Child Dev. Specialist",
  "How to Talk to Kids About Sex | Parents.mp4": "Prof. Chan",
  "Using time-out.mp4": "Sun, Counseling Consultant",
};

const VIEWS_OVERRIDES: Record<string, string> = {
  "8 Ways to Improve Parent Child Relationship.mp4": "3,241",
  "Communicating with Your Child- What Would You Say.mp4": "5,820",
  "Communicating with Your Child.mp4": "4,015",
  "Communicating with Your Child：Play Time.mp4": "2,768",
  "How to Talk to Kids About Sex | Parents.mp4": "6,340",
  "Using time-out.mp4": "7,112",
};

export type CourseVideo = {
  slug: string;
  title: string;
  fileName: string;
  src: string;
  description: string;
  duration?: string;
  instructor?: string;
  views?: string;
};

function toSlug(fileName: string) {
  const raw = fileName.replace(/\.[^.]+$/, "");
  return raw
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "-");
}

function titleFromFileName(fileName: string) {
  return fileName.replace(/\.[^.]+$/, "");
}

async function readVideoComment(filePath: string): Promise<string | null> {
  try {
    const { stdout } = await execFileAsync("ffprobe", [
      "-v",
      "quiet",
      "-print_format",
      "json",
      "-show_format",
      filePath,
    ]);

    const parsed = JSON.parse(stdout) as {
      format?: { tags?: Record<string, string | undefined> };
    };
    const tags = parsed.format?.tags ?? {};
    return tags.comment ?? tags.description ?? tags.COMMENT ?? tags.DESCRIPTION ?? null;
  } catch {
    return null;
  }
}

export async function getCourseVideos(): Promise<CourseVideo[]> {
  const entries = await fs.readdir(VIDEOS_DIR, { withFileTypes: true });

  const files = entries
    .filter((entry) => entry.isFile() && /\.(mp4|mov|webm)$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const videos = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(VIDEOS_DIR, fileName);
      const comment = await readVideoComment(filePath);

      return {
        slug: toSlug(fileName),
        title: titleFromFileName(fileName),
        fileName,
        src: `/videos/${encodeURIComponent(fileName)}`,
        description: comment || DESCRIPTION_OVERRIDES[fileName] || "Video lesson demo.",
        duration: DURATION_OVERRIDES[fileName],
        instructor: INSTRUCTOR_OVERRIDES[fileName] ?? "Mind-Nest Team",
        views: VIEWS_OVERRIDES[fileName],
      };
    }),
  );

  return videos;
}

export async function getCourseVideoBySlug(slug: string): Promise<CourseVideo | null> {
  const videos = await getCourseVideos();
  return videos.find((video) => video.slug === slug) ?? null;
}
