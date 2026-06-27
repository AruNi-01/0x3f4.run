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
  description: "meta.description",
  avatar: "/logo.png",
  browserIcon: "/favicon.ico",

  homePage: {
    titleAnimationStr: "home.titleAnimation",
    mottoStr: "home.motto",
  },

  sidebar: {
    headTitle: "AarynLu",
    headIcon: "/logo.png",
    linkLabel: "AruNi-01",
    state: "sidebar.stateValue",
    navItems: [
      {
        label: "navigation.home",
        outlineIcon: <HomeOutlineIcon />,
        solidIcon: <HomeSolidIcon />,
        href: "/",
      },
      {
        label: "navigation.project",
        outlineIcon: <ProjectOutlineIcon />,
        solidIcon: <ProjectSolidIcon />,
        href: "/project",
      },
      {
        label: "navigation.about",
        outlineIcon: <AboutOutlineIcon />,
        solidIcon: <AboutSolidIcon />,
        href: "/about",
      },
      {
        label: "navigation.contact",
        outlineIcon: <ContactOutlineIcon />,
        solidIcon: <ContactSolidIcon />,
        href: "/contact",
      },
    ],
  },

  mobile: {
    headerTitle: "AarynLu",
    titleAnimationStr: "AarynLu",
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
