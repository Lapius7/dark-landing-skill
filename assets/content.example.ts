// 差し替え用。文言・件数・リンクはここに集約する。
export const site = {
  name: "Acme",
  tagline: "Less effort. More effect.",
  // ロゴ未指定なら name の文字だけを表示する
  logo: null as string | null,
};

export const nav = [
  { label: "Blocks", href: "#blocks" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
];

export const hero = {
  announcement: { label: "New", text: "Settings blocks", href: "/changelog", linkLabel: "View changelog" },
  // 前半は灰、後半は白で表示される
  titleMuted: "Beautiful blocks",
  titleStrong: "that your team can trust",
  description: "Save hours of design time with clean, ready-to-use blocks you can place, theme, and ship.",
  primary: { label: "Explore", href: "#blocks" },
  secondary: { label: "Get started", href: "/docs" },
};

export const categories = [
  { name: "Auth", count: 14, align: "top-left" },
  { name: "Hero Sections", count: 9, align: "top-center" },
  { name: "Features", count: 10, align: "top-center" },
  { name: "Dashboard", count: 14, align: "top-left" },
] as const;

// 実在の許可があるものだけ。無ければ空配列でセクションごと非表示
export const logos: { name: string; src: string }[] = [];
export const testimonials: { name: string; handle: string; body: string; avatar: string }[] = [];

export const features = [
  { title: "Works everywhere", body: "Compatible with any React framework." },
  { title: "Theme aware", body: "Inherits your brand colors via CSS variables." },
  { title: "Responsive by default", body: "Looks great from mobile to ultra-wide." },
];

export const faq = [
  { q: "What is this?", a: "A set of blocks you drop into your project." },
  { q: "Can I change a block after installing it?", a: "Yes. The code lives in your project." },
];

export const cta = {
  titleMuted: "Stop shipping",
  titleStrong: "generic UI",
  primary: { label: "Explore", href: "#blocks" },
  secondary: { label: "Read the docs", href: "/docs" },
};

export const footer = {
  columns: [
    { title: "Product", links: [{ label: "Blocks", href: "#blocks" }] },
    { title: "Resources", links: [{ label: "Docs", href: "/docs" }] },
    { title: "Company", links: [{ label: "About", href: "/about" }] },
  ],
  copyright: "© Acme. All rights reserved.",
};
