"use client";

import ContactWay from "@/components/contact-page/ContactWay";
import EmailForm from "@/components/contact-page/EmailForm";
import AnimateLink from "@/components/ui/AnimateLink";
import H1Title from "@/components/ui/H1Title";
import H2Title from "@/components/ui/H2Title";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <section className="flex flex-col items-start justify-center gap-4 lg:mx-0 mx-7 animate-slide-in-from-right-800">
      <H1Title>{t("title")}</H1Title>
      <div className="font-medium opacity-80">
        {t.rich("intro", {
          below: (chunks) => <b>{chunks}</b>,
        })}
      </div>
      <ContactWay />
      <Divider />
      <H2Title>{t("sendTitle")}</H2Title>
      <div className="font-medium opacity-80">
        {t.rich("sendDesc", {
          email: (chunks) => (
            <AnimateLink href="mailto:hello@0x3f4.run" isExternal className="text-primary">
              {chunks}
            </AnimateLink>
          ),
        })}
      </div>
      <EmailForm />
    </section>
  );
}
