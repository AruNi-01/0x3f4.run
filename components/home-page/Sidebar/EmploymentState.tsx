import { Chip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/i18n/LocaleSwitcher";
import AnimatePing from "../../ui/AnimatePing";

export default function EmploymentState() {
  const t = useTranslations("sidebar");

  return (
    <div className="flex items-center justify-between gap-2">
      <Chip startContent={<AnimatePing color="primary" size="2" />} variant="flat">
        <div className="text-xs text-black dark:text-white font-mono">
          {t("state", { status: t("stateValue") })}
        </div>
      </Chip>
      <LocaleSwitcher variant="popover" />
    </div>
  );
}
