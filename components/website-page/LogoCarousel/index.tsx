"use client";
import { LogoCarouselProps } from "@/types/LogoCarouselProps";
import { Link } from "@nextui-org/link";
import "./index.css";
import { useTheme } from "next-themes";
import { Image } from "@nextui-org/react";

export default function LogoCarousel({ logos }: { logos: LogoCarouselProps[] }) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "slider-dark lg:w-9/12 w-full animate-slide-in-from-right-1000" : "slider lg:w-9/12 w-full animate-slide-in-from-right-1000"
      }`}
    >
      <div className="slide-track">
        {logos.map((logo) => (
          <div className="slide" key={logo.name}>
            <Link isExternal color="foreground" href={logo.href} className="flex gap-2">
              {logo.src !== "" ? (
                <Image src={logo.src} alt={logo.name} width={44} height={44} radius="sm" />
              ) : (
                <span className="font-bold text-xl">{logo.name}</span>
              )}
            </Link>
          </div>
        ))}
        {/* If slides are more than or at least 10 then doubling the slides is enough.
            If slides are less than 5-8 then tripling them might work. */}
        {logos.map((logo) => (
          <div className="slide" key={logo.name}>
            <Link isExternal color="foreground" href={logo.href} className="flex gap-2">
              {logo.src !== "" ? (
                <Image src={logo.src} alt={logo.name} width={44} height={44} radius="sm" />
              ) : (
                <span className="font-bold text-xl">{logo.name}</span>
              )}
            </Link>
          </div>
        ))}
        {logos.length <= 8 &&
          logos.map((logo) => (
            <div className="slide" key={logo.name}>
              <Link isExternal color="foreground" href={logo.href} className="flex gap-2">
                {logo.src !== "" ? (
                  <Image src={logo.src} alt={logo.name} width={44} height={44} radius="sm" />
                ) : (
                  <span className="font-bold text-xl">{logo.name}</span>
                )}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
