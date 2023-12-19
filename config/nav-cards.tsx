import { NavCardProps } from "@/types/NavCardProps";
import meIcon from "@/public/lottie/me.json";
import websiteIcon from "@/public/lottie/website.json";

export const navCards: NavCardProps[] = [
  {
    animateIcon: meIcon,
    animationStopFrame: 285,
    firstPlayTime: 4000,
    title: "About Me",
    description:
      "The author of this website, a college student based in Wuhan-China. Love coding, basketball, and now fitness every week.",
    buttonText: "FOLLOW",
    buttonLink: "/about",
  },
  {
    animateIcon: websiteIcon,
    animationStopFrame: 104,
    firstPlayTime: 5500,
    title: "About Website",
    description: "A personal homepage that supports desktop and mobile devices, adapt to dark theme.",
    buttonText: "VIEW",
    buttonLink: "/website",
  },
];
