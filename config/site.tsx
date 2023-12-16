import { AboutIcon, ContactIcon, HomeIcon, ProjectIcon } from "@/components/icons";

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
    mottoStr: "The most regretful thing in life is I could have been",
  },

  sidebar: {
    state: "Unemployed",
    navItems: [
      {
        label: "Home",
        icon: <HomeIcon />,
        href: "/",
      },
      {
        label: "Project",
        icon: <ProjectIcon />,
        href: "/project",
      },
      {
        label: "About",
        icon: <AboutIcon />,
        href: "/about",
      },
      {
        label: "Contact",
        icon: <ContactIcon />,
        href: "/contact",
      },
    ],
  },

  mobile: {
    headerTitle: "AarynLu",
    titleAnimationStr: "AarynLu", // don't too long
  },

  links: {
    repo: "https://github.com/AruNi-01/0x3f4.run",
    react: "https://react.dev",
    nextjs: "https://nextjs.org",
    tailwindcss: "https://tailwindcss.com",
    wit: "https://www.wit.edu.cn/",
    vercel: "https://www.vercel.com",
    authGitHub: "https://github.com/AruNi-01",
    authTwitter: "https://twitter.com/AruNi_Lu",
  },
};