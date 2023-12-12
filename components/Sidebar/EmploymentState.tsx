import { Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AnimatePing from "../ui/AnimatePing";

export default function EmploymentState() {
  const router = useRouter();

  return (
    <Chip
      startContent={<AnimatePing color="primary" size="2" />}
      variant="flat"
    >
      <div className="text-xs text-black dark:text-white font-mono">
        Current state: <span className="text-primary">Unemployed</span>
      </div>
    </Chip>
  );
}
