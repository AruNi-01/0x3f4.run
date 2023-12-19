"use client";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import AnimateArrow from "../ui/AnimateArrow";
import { Button } from "@nextui-org/button";
import Lottie from "lottie-react";
import { NavCardProps } from "@/types/NavCardProps";

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
  }, []);

  return (
    <Card
      onMouseEnter={() => {
        lottieRef.current?.play();
      }}
      onMouseLeave={() => {
        lottieRef.current?.stop();
        lottieRef.current?.goToAndStop(animationStopFrame, true);
      }}
      className="mt-6 border border-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <CardBody>
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
      <CardFooter className="pt-0 ">
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
    </Card>
  );
}
