import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";
import {isSupportedLocale} from "./locale";

export default getRequestConfig(async ({requestLocale}) => {
  const localeCandidate = await requestLocale;
  const locale = localeCandidate && isSupportedLocale(localeCandidate) ? localeCandidate : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
