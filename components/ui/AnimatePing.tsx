import { cn } from "@nextui-org/system";

export default function AnimatePing({
  className,
  color,
  size,
}: {
  className?: string;
  color: string;
  size: string;
}) {
  return (
    <span className={cn(`relative flex h-${size} w-${size}`, className)}>
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          `bg-${color}`
        )}
      ></span>
      <span className="relative inline-flex rounded-full h-full w-full bg-primary"></span>
    </span>
  );
}
