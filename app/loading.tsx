"use client";
import loadingIcon1 from "@/public/lottie/loading1.json";
import loadingIcon2 from "@/public/lottie/loading2.json";
import Lottie from "lottie-react";

export default function LoadingPage() {
  return (
    <section className="w-2/3 mx-auto flex flex-col justify-center items-center">
      <Lottie animationData={loadingIcon1} className="-mb-32" />
      <Lottie animationData={loadingIcon2} className="h-48" />
    </section>
  );
}
