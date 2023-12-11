export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AarynLu",
  description: "AarynLu's personal website, made by NextUI, deployed on Vercel.",
	avatar: "/logo.png",
	browserIcon: "/favicon.ico",

  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
  ],

  homePage: {
    titleAnimationStr: "AarynLu | 0x3f4.run",
    mottoStr: "The most regretful thing in life is that I could have been",
  },

  sidebar: {
    state: "Unemployed",
    navItems: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Project",
        href: "/project",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },

  mobile: {
    headerTitle: "AarynLu",
    titleAnimationStr: "AarynLu", // don't too long
    navMenuItems: [
      {
        label: "Project",
        href: "/project",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },

  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
