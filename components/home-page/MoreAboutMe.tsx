"use client";
import { Button } from "@nextui-org/button";
import Lottie from "lottie-react";
import meIcon from "@/public/lottie/me.json";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import AnimateArrow from "../ui/AnimateArrow";

export default function MoreAboutMe() {
  const router = useRouter();

  const meRef = useRef<any>();
  useEffect(() => {
    meRef.current?.goToAndStop(285, true);
  }, []);

  return (
    <Button
      onClick={() => router.push("/about")}
      onMouseEnter={() => {
        meRef.current?.play();
      }}
      onMouseLeave={() => {
        meRef.current?.stop();
        meRef.current?.goToAndStop(285, true);
      }}
      size="lg"
      radius="md"
      variant="flat"
      color="default"
      className="flex gap-2"
    >
      <Lottie animationData={meIcon} lottieRef={meRef} style={{ width: 38, height: 38 }} />
      <AnimateArrow
        text="More about me"
        textSize="text-xl"
        textColor="text-primary"
        size={32}
        arrowColor="text-primary"
      />
    </Button>
  );
}
