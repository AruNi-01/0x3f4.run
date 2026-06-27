import AboutPage from "../../about/page";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: "about"});

  return {
    title: t("title"),
  };
}

export default AboutPage;
