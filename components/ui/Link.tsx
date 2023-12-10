import { Link as NextLink } from "@nextui-org/link";
import { cn } from "@nextui-org/react";

export default function Link({
  href,
  children,
  className,
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <NextLink
      isExternal
      href={href}
      className={cn("text-[#71717A] hover:text-primary", className)}
    >
      {children}
    </NextLink>
  );
}
