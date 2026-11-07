# セットアップ

## 依存

```bash
# 既存プロジェクトがあればそれを使う。無ければ Next.js を作る
npx create-next-app@latest <name> && cd <name>
npx shadcn@latest init
npx shadcn@latest add button accordion
npm i next-themes lucide-react
```

- コマンドは npm 表記。pnpm / bun / yarn を使っているなら読み替える。
- Tailwind は v4。shadcn の `components.json` がある前提。
- フォント: `npm i geist`。CJK を表示するなら該当フォント（例: `Noto Sans JP`）を `next/font/google` で足す。

## 導入手順

1. `assets/tokens.css` の内容を `app/globals.css` に追記（shadcn が生成したトークンを上書き）。
2. `assets/components/*.tsx` を `components/landing/` にコピー。
3. `assets/content.example.ts` を `content.ts` にコピーし、中身を自分のサービスに差し替える。
4. `app/page.tsx` で次の順に並べる。

```tsx
<main className="mx-auto max-w-screen-xl border-x">
  <Header /><Hero /><BentoGrid /><LogoCloud />
  <FeatureGrid /><WallOfLove /><Faq /><Cta /><Footer />
  {/* 不要なセクションは外してよい */}
</main>
```

5. `layout.tsx` に `ThemeProvider`（`attribute="class"`、`defaultTheme="dark"`）を入れる。
6. ファビコンと OGP 画像を設定する。
