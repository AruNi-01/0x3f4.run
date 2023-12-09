import { Link } from "@nextui-org/link";
import { NextUILogo, VercelIcon } from "./icons";

export const Footer = () => {
  return (
    <footer className="mb-0 py-4 hidden md:flex items-center justify-center text-center">
      <div className="ml-[295px] flex items-center gap-2 text-foreground">
        <p className="font-normal">Powered By</p>
        <Link isExternal href="https://nextui.org">
          <NextUILogo className="inline-block" height={17} />
        </Link>
      </div>
      <span></span>
      <div className="mr-[295px] flex justify-end items-center gap-2 text-foreground">
        <p className="font-normal">Deployed on</p>
        <Link isExternal href="https://www.vercel.com">
          <VercelIcon className="text-black dark:text-white" height={16} />
        </Link>
      </div>
    </footer>
  );
};
