# セットアップ

## 依存

```bash
bun create next-app@latest <name>   # 既存プロジェクトがあればそれを使う
cd <name>
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button accordion avatar badge separator
pnpm add next-themes lucide-react
```

- パッケージ管理は pnpm、ランタイムは Bun を優先（既存が Node 前提ならそれに従う）。
- Tailwind は v4。shadcn の `components.json` がある前提。
- フォント: `pnpm add geist`。日本語が要るなら `Noto Sans JP` を `next/font/google` で足す。

## 導入手順

1. `assets/tokens.css` の内容を `app/globals.css` に追記（shadcn が生成したトークンを上書き）。
2. `assets/components/*.tsx` を `components/landing/` にコピー。
3. `assets/content.example.ts` を `content.ts` にコピーし、中身を自分のサービスに差し替える。
4. `app/page.tsx` で次の順に並べる。

```tsx
<main className="mx-auto max-w-screen-xl border-x">
  <Header /><Hero /><BentoGrid /><LogoCloud />
  <FeatureGrid /><WallOfLove /><Faq /><Cta /><Footer />
</main>
```

5. `layout.tsx` に `ThemeProvider`（`attribute="class"`、`defaultTheme="dark"`）を入れる。
6. ファビコンを設定する。OGP が未指定なら skill `ogp-image` を使う。

## ローカル確認

サーバーは portless で `<名前>.localhost` にする（`use-portless` のメモに従う）。
