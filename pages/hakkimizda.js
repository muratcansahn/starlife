import { useTranslations } from "next-intl";

import Head from "next/head";
import AboutUsPage from "../page-templates/AboutUsPage";

const hakkimizda = () => {
  const t = useTranslations("AboutUs");
  return (
    <div>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUsPage />
    </div>
  );
};

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

export default hakkimizda;
