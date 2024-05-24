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
    name: "PromptRun",
    shortIntro: "Make using LLMs easier, more efficient, and more in line with expectations.",
    detailIntro:
      "An AIGC (Artificial Intelligence Generated Content) prompt trading platform. Here, you can buy and sell high-quality prompts to provide inspiration and guidance for your creative, writing, and other AI-generated content tasks.",
    coverImg: "/project/promptrun.png",
    previewLink: "https://promptrun.0x3f4.run",
    sourceLink: "https://github.com/aruni-01/promptrun",
    slug: "promptrun",
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
      {
        name: "Golang",
        src: "/tech/golang.svg",
        href: "https://go.dev/",
      },
      {
        name: "MySQL",
        src: "/tech/mysql.svg",
        href: "https://www.mysql.com/",
      },
      {
        name: "Redis",
        src: "/tech/redis.svg",
        href: "https://redis.io/",
      },
      {
        name: "Kafka",
        src: "/tech/kafka.svg",
        href: "https://kafka.apache.org/",
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
  {
    name: "LeetCode Archive",
    shortIntro: "LeetCode problems archive, include swordfinger offer, leetcode hot 100, codetop 100, sort algo etc.",
    detailIntro:
      "LeetCode problems archive, include swordfinger offer, leetcode hot 100, codetop 100, sort algo etc. It has two versions, one is based on Wolai: https://www.wolai.com/aruni/fKuL9hqz8MhXqvcHrn31uF, and the other is based on Notion: https://aarynlu.notion.site/LeetCode-5e748f5f012743ae97b12a93908c9e58?pvs=4",
    coverImg: "/project/leetcode-archive.png",
    previewLink: "https://www.wolai.com/aruni/fKuL9hqz8MhXqvcHrn31uF",
    sourceLink: "",
    slug: "leetcode-archive",
    techStacks: [],
  },
];
