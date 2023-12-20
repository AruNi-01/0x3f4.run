"use client";
import Image from "next/image";

export default function Mockup() {
  return (
    <>
      <Image
        src="/mockup/0x3f4-run_light_mockup.png"
        alt="mockup_light"
        width={950}
        height={888}
        className="rounded-xl transition-all hover:duration-1000 ease-in-out hover:scale-110 dark:hidden"
      />
      <Image
        src="/mockup/0x3f4-run_dark_mockup.png"
        alt="mockup_dark"
        width={950}
        height={888}
        className="rounded-xl transition-all hover:duration-1000 ease-in-out hover:scale-110 hidden dark:block"
      />
    </>
  );
}
