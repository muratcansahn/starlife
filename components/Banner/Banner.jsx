import { Carousel } from "react-bootstrap";
import { useTranslations } from "next-intl";

const Banner = ({ lang }) => {
  const t = useTranslations("Banner");

  return (
    <div className="banner">
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="banner-images">
            <img
              className="banner-image w-100"
              src="/images/banner.jpg"
              alt="First slide"
            />{" "}
          </div>

          <p className="banner-title">{t("FirstText")}</p>
        </Carousel.Item>
        {/* <Carousel.Item>
          <div className="banner-images">
            <img
              className=" w-100 banner-image banner-image-2"
              src="/images/banner-2.jpg"
              alt="First slide"
            />{" "}
            <img
              className="banner-ribon "
              src="/images/slider-ribon.png"
              alt="First slide"
            />
          </div>

          <p className="banner-title pt-4">{t("SecondText")}</p>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Banner;
