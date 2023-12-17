import { AnimateMouseProps } from "@/types/AnimateMouseProps";
import { cn } from "@nextui-org/system";
import { motion, useMotionTemplate } from "framer-motion";
import { useTheme } from "next-themes";
import {
  DarkMouseShadowColor,
  DarkMouseShadowColors,
  LightMouseShadowColor,
  LightMouseShadowColors,
} from "../constants";

export default function AnimateMouseHoverShadow(props: AnimateMouseProps) {
  const {
    mouseX,
    mouseY,
    groupName,
    zIndex = "-z-50",
    isSingleColor,
    lightColor = LightMouseShadowColor,
    darkColor = DarkMouseShadowColor,
    lightColorArray = LightMouseShadowColors,
    darkColorArray = DarkMouseShadowColors,
    className = "",
  } = props;
  const { theme } = useTheme();

  const darkRandomColor = !isSingleColor
    ? darkColorArray[Math.floor(Math.random() * darkColorArray.length)]
    : darkColor;
  const lightRandomColor = !isSingleColor
    ? lightColorArray[Math.floor(Math.random() * lightColorArray.length)]
    : lightColor;
  const backgroundColor = theme === "dark" ? darkRandomColor : lightRandomColor;

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute -inset-px blur-lg opacity-0 transition duration-500",
        `${zIndex}`,
        `group-hover/${groupName}:opacity-100`,
        `${className}`
      )}
      style={{
        background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${backgroundColor},
              transparent 80%
            )
          `,
      }}
    />
  );
}
