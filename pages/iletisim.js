import { useTranslations } from "next-intl";

import Head from "next/head";
import ContactPage from "../page-templates/ContactPage";

const iletisim = () => {
  const t = useTranslations("Contact");
  return (
    <>
      <Head>
        <title>Neva Yat Kiralama</title>
        <meta name="description" content="Neva Yat Kiralama" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactPage />
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

export default iletisim;
