import { NavCardProps } from "@/types/NavCardProps";
import meIcon from "@/public/lottie/me.json";
import websiteIcon from "@/public/lottie/website.json";

export const navCards: NavCardProps[] = [
  {
    animateIcon: meIcon,
    animationStopFrame: 285,
    firstPlayTime: 4000,
    title: "home.cards.aboutMe.title",
    description: "home.cards.aboutMe.description",
    buttonText: "home.cards.aboutMe.button",
    buttonLink: "/about",
  },
  {
    animateIcon: websiteIcon,
    animationStopFrame: 104,
    firstPlayTime: 5500,
    title: "home.cards.website.title",
    description: "home.cards.website.description",
    buttonText: "home.cards.website.button",
    buttonLink: "/website",
  },
];
