/* eslint-disable @next/next/no-img-element */
import { ChevronDown } from "lucide-react";
import { testimonials, labels } from "@/content";

/** testimonials が空なら出さない。実在し、掲載許可のある声だけ使う。 */
export function WallOfLove() {
  if (testimonials.length === 0) return null;
  return (
    <section className="border-b">
      <h2 className="px-6 py-6 text-sm font-medium">{labels.wallTitle}</h2>
      <div className="relative max-h-[520px] overflow-hidden overscroll-contain">
        <ul className="grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <li key={t.handle} className="flex flex-col gap-2 border-b border-r p-4 text-sm">
              <div className="flex items-center gap-2">
                <img src={t.avatar} alt="" className="size-8 rounded-full" />
                <div className="leading-tight">
                  <p className="text-xs font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>
              <p className="leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="flex justify-center border-t py-3">
        <button className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
          {labels.seeMore} <ChevronDown className="size-3" />
        </button>
      </div>
    </section>
  );
}
