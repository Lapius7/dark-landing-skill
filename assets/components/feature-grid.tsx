import { features } from "@/content";

export function FeatureGrid() {
  return (
    <section className="border-b">
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.title}
            className="flex h-72 flex-col gap-1 overflow-hidden border-b border-r p-6 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0"
          >
            <h3 className="text-sm font-medium">{f.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{f.body}</p>
            {/* ミニ図解の差し込み口。放射状アイコン / リスト / ターミナルのいずれか */}
            <div aria-hidden className="fade-bottom mt-6 flex-1 rounded-t-md border border-b-0 bg-card" />
          </li>
        ))}
      </ul>
    </section>
  );
}
