---
name: dark-landing
description: ダーク系 SaaS / 開発者向けプロダクトのランディングページを作るスキル。黒背景・細い罫線グリッド・ベントグリッド・ロゴクラウド・Wall of Love・FAQ・巨大CTA・フッターを、Efferd や Vercel のような「ミニマルで締まった」見た目で再現する。「ダークなLPを作って」「ベントグリッドのLP」「Efferd みたいなページ」「shadcn ブロック風のランディング」「罫線で区切るダークUI」と頼まれたときに使う。
---

# dark-landing

黒背景に細い罫線を引き、全幅の格子でセクションを区切るランディングページを作る。React + Tailwind v4 + shadcn/ui 前提。

## 手順

1. **確認**（UI着手前に1回だけ。勝手に使わない）: ユーザーに次をまとめて聞く。
   - サービス名・一言説明・主CTA 2つ・ロゴ・色（既定は無彩色）
   - `arc` / `shadcn` の SKILL・MCP、`hallmark`、`make-interfaces-feel-better` を使うか
   - 既に決まっていれば聞かない。
2. **セットアップ**: `references/setup.md` に従い、トークンとユーティリティを入れる。パッケージ管理は pnpm、ランタイムは Bun を優先。
3. **構築**: `references/design-spec.md` で見た目の約束を読み、`references/sections.md` の順にセクションを組む。雛形は `assets/components/` にある。コピーして文言と数値だけ差し替える。
4. **整合**: `pixel-align` を必ず使う（日本語を含む場合は特に）。`scripts/lint.py` で規約違反を検出する。
5. **検証**: `references/checklist.md` を上から確認し、スクショで見比べる。通っていない項目は「未確認」と報告する。

## 守ること（要点）

- 色は意味トークン（`--background` `--foreground` `--muted-foreground` `--border`）だけ。`#000` や `gray-500` の直書き禁止。
- 区切りは影や角丸の面ではなく **1px の罫線**。セルは隙間なく隣接させる。
- 強調は色ではなく **白と灰の明暗差**。アクセント色は使わない（指定があれば1色だけ）。
- 見出しは1文の中で「灰（前半）＋白（後半）」に分ける。
- 仮のロゴ・仮のアイコンは置かない。ロゴ未指定ならサービス名の文字だけ。ファビコンは設定する。
- 実在しない顧客ロゴ・ユーザーの声・数値を捏造しない。ダミーは「サンプル」と明記するか、ユーザーに素材を求める。
- 内側のスクロール領域には `overscroll-contain`。
- 文言・ドメイン・件数は定数ファイル（`content.ts`）に集約する。
- アニメーションは `prefers-reduced-motion` で止める。
- i18n を入れる場合は x18n を使う。

## ファイル

| パス | 内容 |
|---|---|
| `references/design-spec.md` | 色・文字・余白・罫線・ボタンの数値仕様 |
| `references/sections.md` | 12 セクションの構造と寸法 |
| `references/setup.md` | 依存と `globals.css` の導入 |
| `references/checklist.md` | 完成判定 |
| `assets/tokens.css` | 色トークン（ライト / ダーク） |
| `assets/components/*.tsx` | セクション雛形 |
| `assets/content.example.ts` | 差し替え用の文言定義 |
| `scripts/lint.py` | 直書き色・影・角丸の検出 |
