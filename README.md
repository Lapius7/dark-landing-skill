# dark-landing

黒背景・罫線グリッド・ベントグリッドのダーク系 SaaS ランディングページを作る Claude Code スキル。React + Tailwind v4 + shadcn/ui 前提。

## 導入

```bash
git clone <this repo> dark-landing-skill
ln -s "$PWD/dark-landing-skill" ~/.claude/skills/dark-landing
```

## 使い方

「ダークなベントグリッドのLPを作って」のように頼む。

## 構成

`SKILL.md`（手順と規約）/ `references/`（仕様・セクション・確認表）/ `assets/`（トークン・部品の雛形・文言定義）/ `scripts/lint.py`（規約検査）

## 検査

```bash
python3 -I scripts/lint.py ./src
```

## ライセンス

MIT
