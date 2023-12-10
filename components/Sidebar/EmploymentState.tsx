import { Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function EmploymentState() {
  const router = useRouter();

  return (
    <Chip
      startContent={
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-full w-full bg-primary"></span>
        </span>
      }
      onClick={() => {
        router.push("/about");
      }}
      variant="flat"
    >
      <div className="text-xs text-black dark:text-white font-mono">
        State: <span className="text-primary">Unemployed</span>
      </div>
    </Chip>
  );
}
