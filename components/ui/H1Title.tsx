import { cn } from "@nextui-org/react";
import { title } from "../primitives";

export default function H1Title({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return <h1 className={cn(title(), "font-serif opacity-90", className)}>{children}</h1>;
}
