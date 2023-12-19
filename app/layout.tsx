"use client";
import Sidebar from "@/components/home-page/Sidebar";
import { MobileNavbar } from "@/components/home-page/mobile-navbar";
import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";
import { useEffect, useState } from "react";
import LoadingPage from "./loading";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isWebsitePage = pathname === "/website";
  const commonMainCN = "container lg:w-2/3 max-w-[775px] justify-around items-center gap-4 mb-20 -mt-14";
  const websiteMainCN = "container lg:w-4/5 justify-start items-center gap-4 mb-20 -mt-14";

  const [isLoading, setIsLoading] = useState(true);
  // don't care me, just for show loading animation at first enter...
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          {isLoading ? (
            <LoadingPage />
          ) : (
            <div className="relative flex flex-col h-screen gap-4">
              <MobileNavbar className="lg:hidden" />
              <div
                className={`flex justify-center w-full  mx-auto lg:mt-32 mt-14 gap-[105px] ${
                  !isWebsitePage ? "md:w-4/6" : ""
                }`}
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
      </body>
    </html>
  );
}
