import { ProjectsProps } from "@/types/ProjectsProps";

export const projects: ProjectsProps[] = [
  {
    name: "Personal Homepage",
    shortIntro: "A personal homepage that supports desktop and mobile devices, adapt to dark theme.",
    detailIntro:
      "A personal homepage that supports desktop and mobile devices, adapt to dark theme. It based on NextUI, Material Tailwind and Flowbite component libraries. In animation, Lottie React, Framer Motion, etc. were used. And now deployed on Vercel.",
    coverImg: "/project/personal-homepage.png",
    previewLink: "https://0x3f4.run",
    sourceLink: "https://github.com/aruni-01/0x3f4.run",
    slug: "personal-homepage",
    techStacks: [
      {
        name: "React",
        src: "/tech/react.svg",
        href: "https://react.org/",
      },
      {
        name: "Next.js",
        src: "/tech/nextjs.svg",
        href: "https://nextjs.org/",
      },
      {
        name: "Tailwind CSS",
        src: "/tech/tailwindcss.svg",
        href: "https://tailwindcss.com/",
      },
      {
        name: "TypeScript",
        src: "/tech/typescript.svg",
        href: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    name: "Wolai2Notion",
    shortIntro:
      "A Python tool for transferring Wolai to Notion, supporting most types of Block, and conversion of Database and Page.",
    detailIntro:
      "A Python tool for transferring Wolai to Notion, supporting most types of Block, and conversion of Database and Page.",
    coverImg: "/project/wolai2notion.png",
    previewLink: "",
    sourceLink: "https://github.com/AruNi-01/wolai2notion",
    slug: "wolai2notion",
    techStacks: [
      {
        name: "Python",
        src: "/tech/python.svg",
        href: "https://python.org/",
      },
    ],
  },
];
