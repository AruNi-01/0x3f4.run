"use client";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import AnimateArrow from "../ui/AnimateArrow";
import { Button } from "@nextui-org/button";
import Lottie from "lottie-react";
import { NavCardProps } from "@/types/NavCardProps";
import { useTheme } from "next-themes";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { DarkMouseShadowColors, LightMouseShadowColors } from "../constants";

export default function NavCard({
  animateIcon,
  animationStopFrame,
  firstPlayTime,
  title,
  description,
  buttonText,
  buttonLink,
}: NavCardProps) {
  const router = useRouter();

  const lottieRef = useRef<any>();
  useEffect(() => {
    lottieRef.current?.play();
    setTimeout(() => {
      lottieRef.current?.stop();
      lottieRef.current?.goToAndStop(animationStopFrame, true);
    }, firstPlayTime);
  }, [animationStopFrame, firstPlayTime]);

  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const darkRandomColor = DarkMouseShadowColors[Math.floor(Math.random() * DarkMouseShadowColors.length)];
  const lightRandomColor = LightMouseShadowColors[Math.floor(Math.random() * LightMouseShadowColors.length)];

  return (
    <Card
      onMouseEnter={() => {
        lottieRef.current?.play();
      }}
      onMouseLeave={() => {
        lottieRef.current?.stop();
        lottieRef.current?.goToAndStop(animationStopFrame, true);
      }}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group/motion mt-6 border border-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 animate-slide-in-to-up-1000 cursor-default"
    >
      <CardBody className="z-50">
        <Lottie
          animationData={animateIcon}
          lottieRef={lottieRef}
          style={{ width: 64, height: 64 }}
          className="-ml-4 -mt-4"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-neutral-200">
          {title}
        </Typography>
        <Typography className="dark:text-neutral-300 lg:line-clamp-2 overflow-ellipsis">{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0 z-50">
        <Button
          onClick={() => router.push(buttonLink)}
          size="md"
          radius="md"
          variant="light"
          color="default"
          className="flex gap-2 dark:text-neutral-200"
        >
          <AnimateArrow text={buttonText} textSize="text-md" size={24} />
        </Button>
      </CardFooter>
      <motion.div
        className="z-10 pointer-events-none absolute -inset-px blur-lg opacity-0 transition group-hover/motion:duration-500 group-hover/motion:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${theme === "dark" ? darkRandomColor : lightRandomColor},
              transparent 80%
            )
          `,
        }}
      />
    </Card>
  );
}
