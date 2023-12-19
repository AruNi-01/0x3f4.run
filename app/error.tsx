"use client";
import { BackIcon, UpdateIcon } from "@/components/icons";
import errorIcon from "@/public/lottie/error.json";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Lottie from "lottie-react";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col md:flex-row md:mx-0 mx-5 items-center justify-center mt-10">
      <Lottie animationData={errorIcon} className="md:w-2/3" />
      <div className="flex flex-col gap-3 md:w-1/3">
        <span className="font-bold text-4xl animate-slide-in-to-up-500">Oops!</span>
        <span className="text-neutral-500 text-lg animate-slide-in-to-up-1000">Website seems to crashing...</span>
        <Button
          as={Link}
          href="/"
          color="default"
          startContent={
            <BackIcon className="transition-all group-hover/icon:duration-1000 ease-in-out group-hover/icon:-translate-x-2" />
          }
          className="group/icon font-bold mt-6 animate-slide-in-to-up-1500"
        >
          Back Home
        </Button>
        <Button
          as={Link}
          onClick={() => {
            reset();
          }}
          color="primary"
          startContent={
            <UpdateIcon className="transition-all group-hover/icon:duration-1000 ease-in-out group-hover/icon:scale-125" />
          }
          className="group/icon font-bold mt-3 animate-slide-in-to-up-1500"
        >
          Try Again
        </Button>
      </div>
    </section>
  );
}
