import Image from "next/image";
import Link from "next/link";

type FooterCopy = {
  description: string;
  columns: Array<{ title: string; items: Array<{ label: string; href: string; enabled: boolean }> }>;
  copyright: string;
  tagline: string;
};

export function SiteFooter({ copy }: { copy: FooterCopy }) {
  return (
    <footer
      id="contact"
      className="relative mt-8 border-t border-line bg-gradient-to-r from-amber-50/70 via-background to-orange-50/50 text-base"
    >
      <div className="mx-auto w-[min(1080px,92vw)] py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="overflow-hidden rounded-xl border border-line bg-surface p-1.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Mind-Nest logo"
                  width={38}
                  height={38}
                  className="h-9 w-9 object-cover"
                />
              </span>
              <span className="font-heading text-base font-semibold text-foreground">Mind-Nest</span>
            </Link>
            <p className="max-w-xs text-base leading-8 text-muted">{copy.description}</p>
          </div>

          {copy.columns.map((column) => (
            <FooterColumn key={column.title} title={column.title} items={column.items} />
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-7 text-base text-muted md:flex md:items-center md:justify-between">
          <p>{copy.copyright}</p>
          <p className="mt-3 md:mt-0">{copy.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string; enabled: boolean }>;
}) {
  return (
    <div>
      <h3 className="mb-5 font-heading text-base font-semibold text-foreground">{title}</h3>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.label}>
            {item.enabled ? (
              <Link
                href={item.href}
                className="text-base text-muted transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-disabled="true" className="cursor-not-allowed text-base text-muted/55">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
