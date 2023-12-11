import { cn } from "@nextui-org/react";

export default function H2Title({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <h2 className={cn("text-xl lg:text-2xl font-serif", className)}>
      {children}
    </h2>
  );
}
