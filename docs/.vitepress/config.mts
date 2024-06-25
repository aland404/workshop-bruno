import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bruno fait de la résistance",
  description: "A la découverte de Bruno, l'API client qui fait de la résistance",
  lang: 'fr-FR',
  base: '/workshop-bruno',
  head: [['link', { rel: "shortcut icon", href: "/workshop-bruno/favicon.ico"}]],
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Workshop', link: '/chapter-1', activeMatch: 'chapter-.*' },
      { text: 'Mon compte', link: '/personnal-info', activeMatch: 'personnal-info' },
      { text: 'Doc Bruno', link: 'https://docs.usebruno.com/introduction' }
    ],

    sidebar: [
      {
        text: 'Sommaire',
        items: [
          { text: 'Chapitre 1 - briefing 📜', link: '/chapter-1' },
          { text: 'Chapitre 2 - configuration ⚙️', link: '/chapter-2' },
          { text: 'Chapitre 3 - exploration 🛰️', link: '/chapter-3' },
          { text: 'Chapitre 4 - la force des variables 💪', link: '/chapter-4' },
          { text: 'Chapitre 5 - Les scripts à la rescousse 🚑', link: '/chapter-5' },
          { text: 'Chapitre 6 - Renforcement de la sécurité 🥋', link: '/chapter-6' },
          { text: 'Chapitre 7 - Le pouvoir de la CI 🤖⚡️', link: '/chapter-7' },
          { text: 'Chapitre 8 - Librairies intergalactiques 💫', link: '/chapter-8' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aland404/workshop-bruno' }
    ]
  }
})
