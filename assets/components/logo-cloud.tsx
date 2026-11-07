/* eslint-disable @next/next/no-img-element */
import { logos } from "@/content";

/** logos が空ならセクションごと出さない（仮ロゴ禁止）。 */
export function LogoCloud() {
  if (logos.length === 0) return null;
  return (
    <section className="border-b">
      <h2 className="px-6 py-6 text-sm font-medium">Trusted by people at</h2>
      <ul className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6 px-6 pb-10">
        {logos.map((l) => (
          <li key={l.name}>
            <img src={l.src} alt={l.name} className="h-6 w-auto opacity-60 grayscale invert-0 dark:invert" />
          </li>
        ))}
      </ul>
    </section>
  );
}
