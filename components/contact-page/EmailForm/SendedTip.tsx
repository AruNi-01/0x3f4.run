import { FailIcon, SuccessIcon } from "@/components/icons";
import { Chip } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function SendedTip({ isSuccess, onCloseHandle }: { isSuccess: boolean; onCloseHandle: () => void }) {
  const t = useTranslations("contact.form");

  return (
    <Chip
      startContent={isSuccess ? <SuccessIcon /> : <FailIcon />}
      onClose={onCloseHandle}
      color={isSuccess ? "success" : "danger"}
      size="lg"
      variant="light"
      classNames={{
        closeButton: "lg:ml-6",
      }}
      className="font-bold"
    >
      <span className="block whitespace-normal leading-4">
        {isSuccess ? t("success") : t("fail")}
      </span>
    </Chip>
  );
}
