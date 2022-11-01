import { defineConfig } from "vitepress";

const sidebar = [
  {
    text: "Final Stage —— 终章",
    items: [{ text: "此间收获", link: "/index.md" }],
  },
  {
    text: "Original —— 初始台地",
    items: [{ text: "整装待发", link: "/set-off/index.md" }],
  },
  {
    text: "Reactivity —— 响应式",
    items: [{ text: "实现 Effect", link: "/reactivity/effect.md" }],
  },
];

const themeConfig = {
  logo: "/vue.svg",
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present Luckept",
  },
  socialLinks: [
    // TODO: will be change in 3 months
    { icon: "github", link: "https://github.com/hlyiww/learn-mini-vue" },
  ],
  sidebar,
};

const config = defineConfig({
  title: "Learn Mini Vue",
  description: "Course Notes",
  themeConfig,
});

export default config;
