import { useTranslations } from "next-intl";
import { Carousel } from "react-bootstrap";
import Head from "next/head";
import ServicePage from "../../page-templates/ServicePage";
import { servicesSubMenuItems } from "../../components/Header";

let ServicesRoute = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].href;

let ServicesTitle = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].title;

const bacheloretteParty = ({}) => {
  const t = useTranslations("BacheloretteParty");
  return (
    <>
      <Head>
        <title>Bekarlığa Veda Partisi | Sealife Yat Kiralama</title>
        <meta name="description" content="İstanbul Boğaz Turu hakkında" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicePage
        servicescarousel={
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/bachelorette/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/bachelorette/2.jpg"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/bachelorette/3.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/bachelorette/4.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/bachelorette/5.jpg"
                alt="First slide"
              />
            </Carousel.Item>{" "}
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/bachelorette/6.jpg"
                alt="First slide"
              />
            </Carousel.Item>{" "}
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/bachelorette/7.jpg"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        }
        lang="tr"
        route={ServicesRoute}
        servicespagetitle={t("BachelorettePartyTitle")}
        servicespagetext={t("BachelorettePartyText")}
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
