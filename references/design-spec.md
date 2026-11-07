# デザイン仕様

元になった見た目の実測ではなく、スクリーンショットから起こした値。細部は `pixel-align` で詰める。

## 色（ダーク既定）

| トークン | 値 | 用途 |
|---|---|---|
| `--background` | `oklch(0.1 0 0)` ほぼ黒（純黒 `#000` でも可） | 背景 |
| `--foreground` | `oklch(0.985 0 0)` | 主テキスト、主ボタン背景 |
| `--muted-foreground` | `oklch(0.65 0 0)` | 説明文、見出し前半、ラベル |
| `--border` | `oklch(1 0 0 / 10%)` | 罫線すべて |
| `--card` | `oklch(1 0 0 / 2%)` | セルのわずかな浮き |
| `--card-hover` | `oklch(1 0 0 / 4%)` | セルのホバー |
| `--primary` / `--primary-foreground` | 白 / 黒 | 主ボタン |

ライトは反転して `--background: oklch(1 0 0)`、`--border: oklch(0 0 0 / 10%)`。
アクセント色・グラデーション・グローは使わない。

## 文字

- 欧文: Geist Sans（なければ Inter）。等幅: Geist Mono。
- 日本語を含むときは `font-family` に `"Noto Sans JP", "Hiragino Sans", "Yu Gothic UI", sans-serif` を明示（OS差のずれ対策）。
- 見出し H1: `clamp(2rem, 5vw, 3.25rem)`、`font-weight 500`、`letter-spacing -0.02em`、`line-height 1.15`。
- 見出し H2（セクション）: `1.5rem`〜`2rem`、weight 500。
- セル見出し: `0.875rem`（14px）、weight 500。
- 説明文: `0.875rem`〜`1rem`、`--muted-foreground`、`line-height 1.6`。
- ラベル・件数（「14 blocks」）: `0.75rem`（12px）、`--muted-foreground`。
- 太さは 400 と 500 のみ。700 は使わない。
- 数字が並ぶ箇所は `tabular-nums`。

## 罫線グリッド

- ページ全体を `max-w-screen-xl`（1280px）の枠に入れ、**左右の縦罫線**を常に表示する（`border-x`）。
- セクション間は全幅の横罫線（`border-t`）。
- セル同士は隙間 0。隣接する辺は `border-r` と `border-b` だけを持たせ、二重線にしない（最終列・最終行は消す）。
- 格子の交点に小さな十字（`+`）を置いてもよい。置くなら全交点に統一する。
- 角丸は 0。ボタンと入力だけ `rounded-md`。カードに影を付けない。

## 余白

- セクション縦 padding: `py-16`〜`py-24`。セル内 padding: `p-6`。
- セルの高さは揃える（`h-48`〜`h-64`、同じ行で統一）。
- ヒーローは上下 `py-24` 以上。視線の余白を惜しまない。

## ボタン

| 種類 | 見た目 |
|---|---|
| 主 | 白背景・黒文字・`h-8`〜`h-9`・`px-3`・`rounded-md`・`text-sm` weight 500 |
| 副 | `--card` 背景・`1px --border`・白文字 |
| ghost | 背景なし・灰文字、ホバーで白 |
| ピル（お知らせ） | `h-6`・`text-xs`・左「New …」右「View …↗」を縦罫線で分割・`rounded-md`・`1px --border` |

ホバーは明度を 8〜10% 動かすだけ。拡大しない。`active:scale-[0.98]` は許可。

## ビジュアル（セル内の絵）

- 本物のUIを載せられない場合は、**灰の棒と角丸の箱だけで描いた抽象モック**にする（`opacity-40`〜`60`）。
- 絵は必ずセルの端で切れる（`overflow-hidden`）。セルより小さく収めない。
- 上端から下へ `mask-image: linear-gradient(to bottom, black 40%, transparent)` でフェードさせる。

## 動き

- 変化は `150ms`〜`200ms`、`ease-out`。入場は `opacity` と `translateY(8px)` のみ。
- `@media (prefers-reduced-motion: reduce)` で全停止。
- テーマ切替は `next-themes`。切替ボタン（`Toggle Theme` + `D` キー表示）をフッターに置く。
