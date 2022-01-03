import { useTranslations } from "next-intl";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import {
  Contact,
  Container,
  ComponentHeader,
  Header,
  Footer,
  WhatsappButton,
} from ".";

const AboutUsPage = () => {
  const t = useTranslations("AboutUsPage");

  return (
    <main>
      <WhatsappButton />
      <Header />

      <div className="my-4 about-us-container container">
        {" "}
        <h1 className="text-center my-4"> {t("PageName")}</h1>
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <img
              className="d-block about-us-img w-100"
              src="/images/hizmetlerimiz/business-dinner/4.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block about-us-img w-100"
              src="/images/hizmetlerimiz/marriage/5.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block about-us-img w-100"
              src="/images/hizmetlerimiz/swim-tour/3.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block about-us-img w-100"
              src="/images/hizmetlerimiz/bachelorette/1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>{" "}
        <p className="about-us-text my-4"> {t("PageNameText")}</p>
      </div>

      <Footer />
    </main>
  );
};

export default AboutUsPage;
