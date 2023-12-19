"use client";
import { BackIcon } from "@/components/icons";
import notFoundIcon from "@/public/lottie/not-found.json";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col md:flex-row md:mx-0 mx-5 items-center justify-center mt-10">
      <Lottie animationData={notFoundIcon} className="md:w-2/3" />
      <div className="flex flex-col gap-3 md:w-1/3">
        <span className="font-bold text-4xl animate-slide-in-up-500">Oops!</span>
        <span className="text-neutral-500 text-lg animate-slide-in-up-1000">
          Website can&apos;t seem to find the page you are looking for.
        </span>
        <Button
          as={Link}
          href="/"
          color="primary"
          startContent={
            <BackIcon className="transition-all group-hover/icon:duration-1000 ease-in-out group-hover/icon:-translate-x-2" />
          }
          className="group/icon font-bold mt-6 animate-slide-in-up-1500"
        >
          Take Me Home
        </Button>
      </div>
    </section>
  );
}
