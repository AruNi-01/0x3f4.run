import { cn } from "@nextui-org/system";

export default function TimelineConnector({
  className,
  isActive,
}: {
  className?: string;
  isActive?: boolean;
}) {
  return (
    <span
      className={cn(
        "absolute left-0 grid justify-center bg-transparent transition-opacity duration-200",
        className
      )}
      style={{ top: "42px", width: "42px", opacity: 1, height: "100%" }}
    >
      <span
        className={`w-0.5 h-full ${
          isActive ? "bg-primary" : "bg-neutral-700"
        }`}
      ></span>
    </span>
  );
}
