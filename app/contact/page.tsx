"use client";
import ContactWay from "@/components/contact-page/ContactWay";
import H1Title from "@/components/ui/H1Title";
import { Divider } from "@nextui-org/react";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7">
      <H1Title>Contact me</H1Title>
      <div className="font-medium opacity-80">
        You can contact me by <b>below ways</b> if you have any questions or
        want to cooperate with me, worth celebrating if want become friends with
        me. Otherwise it&apos;s so boring to a programmer who chat with GPT all
        day. Ahaha!
      </div>
      <ContactWay />
      <Divider />
    </section>
  );
}
