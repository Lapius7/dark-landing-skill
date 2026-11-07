// 差し替え用。画面に出る文字はすべてここに置く（コンポーネントに文字を直書きしない）。
// 値はすべて見本。自分のサービスの内容に置き換えること。

export const site = {
  name: "Your Product",
  tagline: "Your tagline",
  // ロゴ未指定なら name の文字だけを表示する
  logo: null as string | null,
};

export const labels = {
  login: "Log in",
  signup: "Sign up",
  logosTitle: "Trusted by",
  wallTitle: "What people say",
  seeMore: "See more",
};

export const nav = [
  { label: "Item 1", href: "#" },
  { label: "Item 2", href: "#" },
  { label: "Item 3", href: "#" },
  { label: "Item 4", href: "#" },
];

export const hero = {
  // お知らせピル。不要なら announcement を undefined にして hero.tsx 側で非表示にする
  announcement: { badge: "New", linkLabel: "Learn more", href: "#" },
  // 前半は灰、後半は白で表示される
  titleMuted: "First half of the headline,",
  titleStrong: "second half of the headline",
  description: "One or two sentences that explain what the product does and for whom.",
  primary: { label: "Primary action", href: "#" },
  secondary: { label: "Secondary action", href: "#" },
};

// meta は件数や補足。数える値は配列から計算して渡す
export const categories = [
  { name: "Category A", meta: "0 items", align: "top-left" },
  { name: "Category B", meta: "0 items", align: "top-center" },
  { name: "Category C", meta: "0 items", align: "top-center" },
  { name: "Category D", meta: "0 items", align: "top-left" },
] as const;

// 実在し、掲載の許可があるものだけ。空配列ならセクションごと非表示
export const logos: { name: string; src: string }[] = [];
export const testimonials: { name: string; handle: string; body: string; avatar: string }[] = [];

export const features = [
  { title: "Feature 1", body: "One line that explains it." },
  { title: "Feature 2", body: "One line that explains it." },
  { title: "Feature 3", body: "One line that explains it." },
];

export const faq = [
  { q: "Question 1", a: "Answer 1." },
  { q: "Question 2", a: "Answer 2." },
];

export const cta = {
  titleMuted: "Closing message,",
  titleStrong: "short and direct",
  primary: { label: "Primary action", href: "#" },
  secondary: { label: "Secondary action", href: "#" },
};

export const footer = {
  columns: [
    { title: "Column 1", links: [{ label: "Link", href: "#" }] },
    { title: "Column 2", links: [{ label: "Link", href: "#" }] },
    { title: "Column 3", links: [{ label: "Link", href: "#" }] },
  ],
  copyright: "© Your Name",
};
