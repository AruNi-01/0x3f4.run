"use client";

import { LanguagesIcon } from "@/components/icons";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { Locale, SUPPORTED_LOCALES } from "@/i18n/locale";
import { cn } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";

export default function LocaleSwitcher({
  className,
  showLabel = true,
  variant = "inline",
}: {
  className?: string;
  showLabel?: boolean;
  variant?: "inline" | "popover";
}) {
  const locale = useLocale();
  const t = useTranslations("language");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.toString();
  const nextPath = `${pathname}${query ? `?${query}` : ""}`;

  const switchLocale = (nextLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.href = nextPath;
  };

  if (variant === "popover") {
    return (
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className={cn("min-w-0 h-7 w-7 text-default-500 dark:text-default-300", className)}
            aria-label={t("label")}
          >
            <LanguagesIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-1">
          <div className="flex flex-col gap-1">
            {SUPPORTED_LOCALES.map((availableLocale) => (
              <Button
                key={availableLocale}
                size="sm"
                variant={locale === availableLocale ? "solid" : "light"}
                className="justify-start"
                onClick={() => {
                  switchLocale(availableLocale);
                }}
              >
                {t(availableLocale)}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <div className={cn("flex items-center gap-2 text-sm text-[#6b7280] dark:text-[#a1a1aa]", className)}>
      {showLabel ? <span>{t("label")}</span> : null}
      <div className="flex items-center rounded-full bg-default-100 dark:bg-neutral-800 p-1 text-default-800 dark:text-default-200">
        {SUPPORTED_LOCALES.map((availableLocale, index) => (
          <Button
            key={availableLocale}
            size="sm"
            variant={locale === availableLocale ? "solid" : "light"}
            className={`rounded-full min-w-0 px-3 h-7 text-xs ${
              index === 0 ? "rounded-e-none" : "rounded-s-none"
            }`}
            onClick={() => {
              switchLocale(availableLocale);
            }}
          >
            {t(availableLocale)}
          </Button>
        ))}
      </div>
    </div>
  );
}
