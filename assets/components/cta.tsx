import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cta } from "@/content";

export function Cta() {
  return (
    <section className="flex flex-col items-center gap-6 border-b px-6 py-24 text-center">
      <h2 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
        <span>{cta.titleMuted}</span>{" "}
        <span className="text-muted-foreground">{cta.titleStrong}</span>
      </h2>
      <div className="flex gap-2">
        <Button asChild size="sm" className="h-8 text-xs"><Link href={cta.primary.href}>{cta.primary.label}</Link></Button>
        <Button asChild size="sm" variant="outline" className="h-8 bg-card text-xs"><Link href={cta.secondary.href}>{cta.secondary.label}</Link></Button>
      </div>
    </section>
  );
}
