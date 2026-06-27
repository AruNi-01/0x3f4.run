export const SUPPORTED_LOCALES = ["en", "zh"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

function normalizeLocaleValue(locale?: string | null): Locale | undefined {
  if (!locale) {
    return undefined;
  }

  const normalized = locale.toLowerCase();

  if (normalized === "zh" || normalized === "zh-cn" || normalized === "zh-hans") {
    return "zh";
  }

  if (normalized === "en" || normalized.startsWith("en-")) {
    return "en";
  }

  return undefined;
}

export function resolveLocale(options: { cookieLocale?: string | null; acceptLanguage?: string | null }): Locale {
  return (
    normalizeLocaleValue(options.cookieLocale) ||
    normalizeLocaleValue(options.acceptLanguage?.split(",")[0]) ||
    DEFAULT_LOCALE
  );
}
