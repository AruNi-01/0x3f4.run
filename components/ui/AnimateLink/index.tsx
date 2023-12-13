import { Link as NextLink } from "@nextui-org/link";
import { cn } from "@nextui-org/react";
import style from "./index.module.scss";

export default function AnimateLink({
  href,
  isExternal,
  children,
  className,
}: {
  href?: string;
  isExternal?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <NextLink
      isExternal={isExternal}
      href={href}
      className={cn(`${style.container}`, className)}
    >
      {children}
    </NextLink>
  );
}
