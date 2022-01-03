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

              <p className="story-text text-center">
                {t("BusinessDinnerTitle")}
              </p>
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
        <Link href="hizmetlerimiz/bekarliga-veda-partisi">
          <div>
            {" "}
            <Events
              img={"/images/hizmetlerimiz/bachelorette/4.jpg"}
              title={t("BacheloretteTitle")}
              text={t("BacheloretteText")}
            />
          </div>
        </Link>
        <Link href="hizmetlerimiz/istanbul-bogaz-turu">
          <div>
            {" "}
            <Events
              img={"/images/hizmetlerimiz/anniversary/2.jpg"}
              title={t("BosphorusTourTitle")}
              text={t("BosphorusTourText")}
            />
          </div>
        </Link>
        <Link href="hizmetlerimiz/dogum-gunu">
          <div>
            <Events
              img={"/images/hizmetlerimiz/birthday/1.jpg"}
              title={t("BirthdayTitle")}
              text={t("BirthdayText")}
            />
          </div>
        </Link>
        <Link href="hizmetlerimiz/is-yemegi-ve-ozel-toplantilar">
          <div>
            <Events
              img={"/images/hizmetlerimiz/business-dinner/1.jpg"}
              title={t("BusinessDinnerTitle")}
              text={t("BusinessDinnerText")}
            />
          </div>
        </Link>
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
