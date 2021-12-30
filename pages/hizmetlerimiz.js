import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Events from "../components/Events";

const hizmetlerimiz = () => {
  //Localization
  const router = useRouter();
  const t = useTranslations("Services");
  return (
    <>
      <Head>
        <title>Hizmetlerimiz</title>
        <meta name="description" content="İstanbul Boğaz Turu hakkında" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />

        <div className="stories mx-auto my-4">
          <Link href="hizmetlerimiz/bekarliga-veda-partisi">
            <div className="story ">
              <Image
                src="/images/story-icons/bachelorette.png"
                className="story-image "
                alt=""
                height={50}
                width={50}
              />

              <p className="story-text text-center">
                {" "}
                {t("BacheloretteTitle")}
              </p>
            </div>
          </Link>
          <Link href="hizmetlerimiz/bekarliga-veda-partisi">
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
        </div>
        <Link href="hizmetlerimiz/bekarliga-veda-partisi">
          <Events
            img={"/images/hizmetlerimiz/bachelorette/4.jpg"}
            title={t("BacheloretteTitle")}
            text={t("BacheloretteText")}
          />
        </Link>
        <Events
          img={"/images/hizmetlerimiz/anniversary/2.jpg"}
          title={t("BosphorusTourTitle")}
          text={t("BosphorusTourText")}
        />
        <Events
          img={"/images/hizmetlerimiz/birthday/1.jpg"}
          title={t("BirthdayTitle")}
          text={t("BirthdayText")}
        />
        <Events
          img={"/images/hizmetlerimiz/business-dinner/1.jpg"}
          title={t("BusinessDinnerTitle")}
          text={t("BusinessDinnerText")}
        />
      </div>
      <Footer />
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

export default hizmetlerimiz;
