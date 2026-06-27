"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Sidebar from "@/components/home-page/Sidebar";
import { MobileNavbar } from "@/components/home-page/mobile-navbar";
import LoadingPage from "./loading";
import { Providers } from "./providers";
import clsx from "clsx";

export default function LayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isWebsitePage = pathname === "/website";
  const commonMainCN = "container lg:w-2/3 max-w-[775px] justify-around items-center gap-4 mb-20 -mt-14";
  const websiteMainCN = "container lg:w-4/5 justify-start items-center gap-4 -mt-14";

  const [isLoading, setIsLoading] = useState(true);
  // don't care me, just for show loading animation at first enter...
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="relative flex flex-col h-screen gap-4">
          <MobileNavbar className="lg:hidden" />
          <div
            className={clsx(
              "flex justify-center w-full  mx-auto lg:mt-32 mt-14 gap-[105px]",
              !isWebsitePage ? "md:w-4/6" : ""
            )}
          >
            {!isWebsitePage && <Sidebar />}
            <main className={!isWebsitePage ? commonMainCN : websiteMainCN}>
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </div>
      )}
    </Providers>
  );
}
