import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="font-medium opacity-80">
      <div>
        {t.rich("contentIntro", {
          name: (chunks) => <b>{chunks}</b>,
        })}
      </div>
      <div className="mt-3">
        {t("contentFocus")}
      </div>
      <div className="mt-3">
        {t("contentBelief")}
      </div>
      <div className="mt-3">
        {t("contentClosing")}
      </div>
    </div>
  );
}
