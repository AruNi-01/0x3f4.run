import { FailIcon, SuccessIcon } from "@/components/icons";
import { Chip } from "@nextui-org/react";

export default function SendedTip({ isSuccess, onCloseHandle }: { isSuccess: boolean; onCloseHandle: () => void }) {
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
        {isSuccess ? "Send success, I will reply you soon." : "Send fail, mis-typed or server error."}
      </span>
    </Chip>
  );
}
