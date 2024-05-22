import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bruno Resistance",
  description: "A la découverte de Bruno, l'API client qui fait de la résistance",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Workshop', link: '/chapter-1', activeMatch: 'chapter-.*' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Chapitre 1 - briefing', link: '/chapter-1' },
          { text: 'Chapitre 2 - exploration', link: '/chapter-2' },
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
