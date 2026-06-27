import { Button, Checkbox, CheckboxGroup, Image, Link, Snippet } from "@nextui-org/react";
import H2Title from "../ui/H2Title";
import { VercelIcon2 } from "../icons";
import AnimateLink from "../ui/AnimateLink";
import { useTranslations } from "next-intl";

export default function Content() {
  const t = useTranslations("website");
  const selectedFeature = ["1", "2", "3", "4"];

  return (
    <div className="flex flex-col gap-3 justify-center font-medium opacity-80 animate-slide-in-to-up-1000">
      <H2Title className="font-bold">{t("introTitle")}</H2Title>
      <span>
        <p>{t("introDesc")}</p>
        <p>{t("introSecond")}</p>
      </span>
      <H2Title className="font-bold">{t("featureTitle")}</H2Title>
      <CheckboxGroup defaultValue={selectedFeature}>
        <Checkbox isReadOnly value="1">
          {t("feature.theme")}
        </Checkbox>
        <Checkbox isReadOnly value="2">
          {t("feature.responsive")}
        </Checkbox>
        <Checkbox isReadOnly value="3">
          {t("feature.router")}
        </Checkbox>
        <Checkbox isReadOnly value="4">
          {t("feature.more")}
        </Checkbox>
        <Checkbox value="5">{t("feature.coming")}</Checkbox>
      </CheckboxGroup>
      <H2Title className="font-bold">{t("usageTitle")}</H2Title>
      <span className="space-y-2">
        <p>
          1. {t("usage.clone")}{" "}
          <AnimateLink isExternal href="https://github.com/AruNi-01/0x3f4.run">
            {t("usage.cloneRepo")}
          </AnimateLink>
        </p>
        <div className="hidden lg:flex">
          <Snippet size="sm">git clone https://github.com/AruNi-01/0x3f4.run.git</Snippet>
        </div>
        <Snippet size="sm" className="lg:hidden">
          git clone repo_git_url
        </Snippet>
        <p>2. {t("usage.install")}</p>
        <Snippet size="sm">npm install</Snippet>
        <p>3. {t("usage.run")}</p>
        <Snippet size="sm">npm run dev</Snippet>
      </span>
      <H2Title className="font-bold">{t("deployTitle")}</H2Title>
      <span className="space-y-2">
        <p>1. {t("deploy.fork")}</p>
        <p>
          2. {t("deploy.import")}{" "}
          <Button
            as={Link}
            size="sm"
            href="https://vercel.com/new"
            isExternal
            color="primary"
            startContent={<VercelIcon2 />}
            endContent={<span className="font-bold">{t("deployButton")}</span>}
          />
        </p>
        <p>3. {t("deploy.waiting")}</p>
      </span>
    </div>
  );
}
