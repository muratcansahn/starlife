import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import Head from "next/head";
import Home from "../page-templates/Home";

const HomePage = () => {
  const router = useRouter();
  const t = useTranslations("Home");
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta
          name="description"
          content="Neva Yacht kiralama olarak 7/24 hizmetinizdeyiz"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home lang="tr" />
    </>
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

export default HomePage;
