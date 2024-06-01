import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bruno Resistance",
  description: "A la découverte de Bruno, l'API client qui fait de la résistance",
  lang: 'fr-FR',
  base: '/workshop-bruno',
  head: [['link', { rel: "shortcut icon", href: "/workshop-bruno/favicon.ico"}]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Workshop', link: '/chapter-1', activeMatch: 'chapter-.*' },
      { text: 'Doc Bruno', link: 'https://docs.usebruno.com/introduction' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Chapitre 1 - briefing 📜', link: '/chapter-1' },
          { text: 'Chapitre 2 - configuration ⚙️', link: '/chapter-2' },
          { text: 'Chapitre 3 - exploration 🛰️', link: '/chapter-3' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aland404/workshop-bruno' }
    ]
  }
})
