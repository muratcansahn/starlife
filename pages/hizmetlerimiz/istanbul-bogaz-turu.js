import { useTranslations } from "next-intl";
import Head from "next/head";

import ServicePage from "../../page-templates/ServicePage";

import { servicesSubMenuItems } from "../../components/Header";

let ServicesRoute = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].href;

const istanbulBogazTuru = ({}) => {
  const t = useTranslations("BosphorusTour");
  return (
    <>
      <Head>
        <title>İstanbul Boğaz Turu | Sealife Yat Kiralama</title>
        <meta name="description" content="İstanbul Boğaz Turu hakkında" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicePage
        lang="tr"
        route={ServicesRoute}
        servicespagetitle={t("BosphorusTourTitle")}
        servicespagetext={t("BosphorusTourText")}
      />
    </>
  );
};

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

export default istanbulBogazTuru;
