import Sidebar from "@/components/home-page/Sidebar";
import { MobileNavbar } from "@/components/home-page/mobile-navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: siteConfig.browserIcon,
    shortcut: siteConfig.browserIcon,
    apple: siteConfig.browserIcon,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen gap-4">
            <MobileNavbar className="lg:hidden" />
            <div className="flex justify-center w-full md:w-4/6 mx-auto lg:mt-32 mt-14 gap-[105px]">
              <Sidebar />
              <main className="container lg:w-2/3 max-w-[775px] justify-around items-center gap-4 mb-20 -mt-14">
                {children}
                <Analytics />
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
