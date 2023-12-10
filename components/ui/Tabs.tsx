"use client";
import { Tabs as NextUITabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export const Tabs = () => {
  const pathname = usePathname();

  return (
    <NextUITabs
      selectedKey={pathname}
      size="lg"
      aria-label="Options"
      color="primary"
      variant="bordered"
    >
      <Tab
        key="/blog"
        href="/blog"
        title={
          <div className="flex items-center space-x-2">
            {/* <GalleryIcon /> */}
            <span>Blog</span>
          </div>
        }
      />
      <Tab
        key="/docs"
        href="/docs"
        title={
          <div className="flex items-center space-x-2">
            {/* <MusicIcon /> */}
            <span>Docs</span>
          </div>
        }
      />
      <Tab
        key="/about"
        href="/about"
        title={
          <div className="flex items-center space-x-2">
            {/* <VideoIcon /> */}
            <span>About</span>
          </div>
        }
      />
    </NextUITabs>
  );
};
