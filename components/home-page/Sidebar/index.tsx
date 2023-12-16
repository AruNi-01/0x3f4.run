"use client";
import { Divider } from "@nextui-org/react";
import Center from "./Center";
import { Footer } from "./Footer";
import Header from "./Header";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col gap-3 w-1/3 h-32 max-w-[285px]">
      <div className="fixed w-1/6 ml-16 max-w-[285px]">
        <Header />
        <Divider className="my-2" />
        <Center />
        <Divider className="my-2" />
        <Footer />
      </div>
    </div>
  );
}
