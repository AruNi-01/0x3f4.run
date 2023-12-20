"use client";
import { Image } from "@nextui-org/react";

export default function Mockup() {
  return (
    <div className="rounded-xl animate-slide-in-from-left-1000 mb-3 self-center">
      <Image
        src="/mockup/0x3f4-run_light_mockup.png"
        alt="mockup_light"
        width={950}
        height={888}
        className="dark:hidden"
      />
      <Image
        src="/mockup/0x3f4-run_dark_mockup.png"
        alt="mockup_dark"
        width={950}
        height={888}
        className="hidden dark:block"
      />
    </div>
  );
}
