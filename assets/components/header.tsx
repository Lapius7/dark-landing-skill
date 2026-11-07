import Link from "next/link";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background/80 px-6 backdrop-blur">
      <Link href="/" className="text-base font-medium leading-none">
        {site.name}
      </Link>
      <nav className="flex items-center gap-1">
        <ul className="hidden items-center gap-5 pr-3 text-xs text-muted-foreground md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="ghost" size="sm" className="h-8 text-xs">Log in</Button>
        <Button size="sm" className="h-8 text-xs">Get access</Button>
      </nav>
    </header>
  );
}
