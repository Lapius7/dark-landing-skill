import Link from "next/link";
import { footer, site } from "@/content";

export function Footer() {
  return (
    <footer>
      <div className="grid gap-10 px-6 py-12 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-base font-medium">{site.name}</p>
          <p className="font-mono text-xs text-muted-foreground">{site.tagline}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {footer.columns.map((col) => (
            <div key={col.title} className="space-y-3">
              <p className="text-xs font-medium">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t px-6 py-4 text-xs text-muted-foreground">{footer.copyright}</div>
    </footer>
  );
}
