import { useTranslations } from "next-intl";
import Head from "next/head";
import { Carousel } from "react-bootstrap";
import ServicePage from "../../page-templates/ServicePage";
import { servicesSubMenuItems } from "../../components/Header";

let ServicesRoute = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].href;

let ServicesTitle = servicesSubMenuItems.filter(
  (item) => item.href === "/hizmetlerimiz/istanbul-bogaz-turu"
)[0].title;

const evlilikTeklifi = ({}) => {
  const t = useTranslations("MarriageProposal");
  return (
    <>
      <Head>
        <title>Evlilik Teklifi | Neva Yat Kiralama</title>
        <meta name="description" content="Evlilik Teklifi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicePage
        servicescarousel={
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/marriage/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/marriage/2.jpg"
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/marriage/3.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/marriage/4.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/marriage/5.jpg"
                alt="First slide"
              />
            </Carousel.Item>{" "}
            <Carousel.Item>
              <img
                className="d-block about-us-img w-100"
                src="/images/hizmetlerimiz/marriage/6.jpg"
                alt="First slide"
              />
            </Carousel.Item>{" "}
          </Carousel>
        }
        lang="tr"
        route={ServicesRoute}
        servicespagetitle={t("MarriageProposalTitle")}
        servicespagetext={t("MarriageProposalText")}
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

export default evlilikTeklifi;
