import {ReactNode} from "react";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {isSupportedLocale} from "@/i18n/locale";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return children;
}
