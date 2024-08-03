import {
  AboutOutlineIcon,
  AboutSolidIcon,
  ContactOutlineIcon,
  ContactSolidIcon,
  HomeOutlineIcon,
  HomeSolidIcon,
  ProjectOutlineIcon,
  ProjectSolidIcon,
} from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "AarynLu",
  description: "AarynLu's personal website, made by NextUI, deployed on Vercel.",
  avatar: "/logo.png",
  browserIcon: "/favicon.ico",

  homePage: {
    titleAnimationStr: "AarynLu | 0x3f4.run",
    mottoStr: "The most regretful thing in life is I could have been",
  },

  sidebar: {
    headTitle: "AarynLu",
    headIcon: "/logo.png",
    linkLabel: "AruNi-01",
    state: "Unemployed",
    navItems: [
      {
        label: "Home",
        outlineIcon: <HomeOutlineIcon />,
        solidIcon: <HomeSolidIcon />,
        href: "/",
      },
      {
        label: "Project",
        outlineIcon: <ProjectOutlineIcon />,
        solidIcon: <ProjectSolidIcon />,
        href: "/project",
      },
      {
        label: "About",
        outlineIcon: <AboutOutlineIcon />,
        solidIcon: <AboutSolidIcon />,
        href: "/about",
      },
      {
        label: "Contact",
        outlineIcon: <ContactOutlineIcon />,
        solidIcon: <ContactSolidIcon />,
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
    hellobike: "https://www.hello-inc.com/index.html",
    vercel: "https://www.vercel.com",
    authGitHub: "https://github.com/AruNi-01",
    authTwitter: "https://twitter.com/AruNi_Lu",
  },
};
