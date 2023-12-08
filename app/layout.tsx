import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/root/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import SideBar from "@/components/root/sidebar";

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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col justify-between h-screen gap-4">
            <Navbar />
            <div className="flex justify-center flex-grow w-full">
              <div className="flex w-4/6 mx-auto gap-5">
                <SideBar />
                <main className="container flex w-3/5 max-w-7xl">
                  {children}
                </main>
              </div>
            </div>
            <footer className="mb-0 py-4 flex items-center justify-between text-center">
              <div className="ml-[300px]">
                <span>Powered By </span>
                <Link
                  className="group"
                  href="https://nextjs.org"
                  target="_blank"
                >
                  Next.js
                </Link>{" "}
                &{" "}
                <Link
                  className="group"
                  href="https://nextui.org"
                  target="_blank"
                >
                  NextUI
                </Link>
              </div>
              <div className="mr-[300px]">
                <span>© 2023 Made by </span>
                <Link
                  className="group"
                  href="https://0x3f4.run"
                  target="_blank"
                >
                  AarynLu
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
