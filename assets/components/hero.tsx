import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/content";

export function Hero() {
  const a = hero.announcement;
  return (
    <section className="grid min-h-[420px] gap-10 border-b px-6 py-24 lg:grid-cols-2 lg:items-end">
      <div className="flex flex-col items-start gap-6">
        <Link
          href={a.href}
          className="inline-flex h-6 items-stretch overflow-hidden rounded-md border text-xs"
        >
          <span className="flex items-center border-r px-2">{a.text}</span>
          <span className="flex items-center gap-1 px-2 text-muted-foreground transition-colors hover:text-foreground">
            {a.linkLabel}
            <ArrowUpRight className="size-3" />
          </span>
        </Link>
        <h1 className="text-balance text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.15] tracking-tight">
          <span className="text-muted-foreground">{hero.titleMuted}</span>
          <br />
          <span>{hero.titleStrong}</span>
        </h1>
        <div className="flex gap-2">
          <Button asChild size="sm" className="h-8 text-xs"><Link href={hero.primary.href}>{hero.primary.label}</Link></Button>
          <Button asChild size="sm" variant="outline" className="h-8 bg-card text-xs"><Link href={hero.secondary.href}>{hero.secondary.label}</Link></Button>
        </div>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
        {hero.description}
      </p>
    </section>
  );
}
