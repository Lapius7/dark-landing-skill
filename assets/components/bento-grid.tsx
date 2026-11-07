import { categories } from "@/content";

const align = {
  "top-left": "items-start justify-start text-left",
  "top-center": "items-start justify-center text-center",
} as const;

/** 罫線は「右と下」だけをセルが持ち、最終列・最終行で消す。二重線を作らない。 */
export function BentoGrid() {
  return (
    <section id="grid" className="border-b">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <li
            key={c.name}
            className="group relative flex h-44 flex-col gap-1 overflow-hidden border-b border-r p-6 transition-colors hover:bg-card-hover lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
          >
            <div className={`flex flex-col gap-0.5 ${align[c.align]}`}>
              <h3 className="text-sm font-medium">{c.name}</h3>
              <p className="text-xs text-muted-foreground tabular-nums">{c.meta}</p>
            </div>
            {/* 抽象モック: 灰の棒と箱だけ。セル端で切り、下へフェードさせる */}
            <div aria-hidden className="fade-bottom absolute inset-x-6 bottom-0 top-20 space-y-2 opacity-50">
              <div className="h-3 w-2/3 rounded-full bg-foreground/10" />
              <div className="h-3 w-full rounded-full bg-foreground/10" />
              <div className="h-10 w-full rounded-md bg-foreground/10" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
