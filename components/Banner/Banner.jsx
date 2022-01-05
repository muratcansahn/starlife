import { Carousel } from "react-bootstrap";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const Banner = ({ lang }) => {
  const t = useTranslations("Banner");

  return (
    <div className="banner">
      <div className="stories mx-auto my-3">
        <Link href="hizmetlerimiz/bekarliga-veda-partisi">
          <div className="story ">
            <Image
              src="/images/story-icons/bachelorette.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center"> {t("BacheloretteTitle")}</p>
          </div>
        </Link>
        <Link href="hizmetlerimiz/dogum-gunu">
          <div className="story ">
            <Image
              src="/images/story-icons/birthday.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center"> {t("BirthdayTitle")}</p>
          </div>
        </Link>
        <Link href="hizmetlerimiz/is-yemegi-ve-ozel-toplantilar">
          <div className="story ">
            <Image
              src="/images/story-icons/business-dinner.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center">{t("BusinessDinnerTitle")}</p>
          </div>
        </Link>
        <Link href="hizmetlerimiz/evlilik-teklifi">
          <div className="story ">
            <Image
              src="/images/story-icons/wedding.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center ">
              {t("MarriageProposalTitle")}
            </p>
          </div>
        </Link>
        <Link href="hizmetlerimiz/yil-donumu-kutlamalari">
          <div className="story ">
            <Image
              src="/images/story-icons/anniversary.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center"> {t("AnniversaryTitle")}</p>
          </div>
        </Link>
      </div>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="banner-images my-3">
            <img
              className="banner-image w-100"
              src="/images/banner.jpg"
              alt="First slide"
            />{" "}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
