import { Chip } from "@nextui-org/react";
import AnimatePing from "../../ui/AnimatePing";

export default function EmploymentState() {
  return (
    <Chip startContent={<AnimatePing color="primary" size="2" />} variant="flat">
      <div className="text-xs text-black dark:text-white font-mono">
        Status: <span className="text-primary">Undergraduate</span>
      </div>
    </Chip>
  );
}
