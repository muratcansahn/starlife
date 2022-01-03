import { useTranslations } from "next-intl";
import { Carousel } from "react-bootstrap";
import Head from "next/head";
import ServicePage from "../../page-templates/ServicePage";

const bacheloretteParty = ({}) => {
  const t = useTranslations("Anniversary");
  return (
    <>
      <Head>
        <title>Yıl Dönümü Kutlamaları | Neva Yat Kiralama</title>
        <meta name="description" content="Yıl Dönümü Kutlamaları" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicePage
        servicescarousel={
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/anniversary/1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/anniversary/2.jpg"
                n
                alt="First slide"
              />
            </Carousel.Item>{" "}
          </Carousel>
        }
        servicespagetitle={t("AnniversaryTitle")}
        servicespagetext={t("AnniversaryText")}
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

export default bacheloretteParty;
