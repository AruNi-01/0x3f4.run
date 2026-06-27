import ContactPage from "../../contact/page";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: "contact"});

  return {
    title: t("title"),
  };
}

export default ContactPage;
