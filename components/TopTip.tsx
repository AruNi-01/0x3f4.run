import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { CongratulationIcon } from "./icons";

export default function TopTip() {
  return (
    <div className="px-4 mx-auto max-w-screen-xl text-center">
      <Button
        as={Link}
        href="https://github.com/aruni-01/0x3f4.run"
        className="flex py-1 px-1 pe-4 text-sm text-black/80 bg-blue-100 rounded-full dark:bg-blue-800 dark:text-white/80 hover:bg-blue-200 dark:hover:bg-blue-900"
      >
        <span className="text-xs bg-blue-500 dark:bg-blue-950 rounded-full flex gap-2 text-white/80 px-4 py-1.5 me-3">
          <CongratulationIcon />
          <p className="font-medium">Hey</p>
        </span>
        <span className="text-sm font-medium block whitespace-normal">
          If you think the website is okay, give me a star on GitHub, thanks!
        </span>
        <svg
          className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </Button>
    </div>
  );
}
