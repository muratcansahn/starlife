import { useTranslations } from "next-intl";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Image from "next/image";

const hizmetlerimiz = () => {
  return (
    <>
      <Head>
        <title>Hizmetlerimiz</title>
        <meta name="description" content="İstanbul Boğaz Turu hakkında" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header />

        <div className="stories mx-auto">
          <div className="story ">
            <Image
              src="/images/story-icons/bachelorette.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center"> Bekarlığa Veda</p>
          </div>

          <div className="story ">
            <Image
              src="/images/story-icons/birthday.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center"> Doğum Günü</p>
          </div>
          <div className="story ">
            <Image
              src="/images/story-icons/business-dinner.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center"> İş Yemeği</p>
          </div>
          <div className="story ">
            <Image
              src="/images/story-icons/wedding.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center ">Evlilik Teklifi</p>
          </div>
          <div className="story ">
            <Image
              src="/images/story-icons/anniversary.png"
              className="story-image "
              alt=""
              height={50}
              width={50}
            />

            <p className="story-text text-center">Yıldönümü Kutlamaları</p>
          </div>
        </div>

        <Events
          img={"/images/hizmetlerimiz/bachelorette/4.jpg"}
          title={"Bekarlığa Veda "}
          text={
            "Evlilik öncesi son zamanlarınızda bekarlığınızı mükemmel bir parti ile sonlandırmak ister misiniz!Her detayı düşünülmüş organizasyonlarımız ile unutulmayacak bir parti gerçekleştirin."
          }
        />
        <Events
          img={"/images/hizmetlerimiz/anniversary/2.jpg"}
          title={"Boğaz Turu"}
          text={
            "İstanbul Boğazı'nın eşsiz güzelliklerini teknelerimizle keşfedebilirsiniz"
          }
        />
        <Events
          img={"/images/hizmetlerimiz/birthday/1.jpg"}
          title={"Doğum Günü "}
          text={
            "İsterseniz sevdiğiniz ile baş başa romantik bir doğum günü geçirebilir ya da kalabalık grubunuz ile yatta doğum günü partisi verebilirsiniz."
          }
        />
        <Events
          img={"/images/hizmetlerimiz/business-dinner/1.jpg"}
          title={"İş Yemeği"}
          text={
            "Ofislere kıyasla daha samimi mekan olan teknelerimizde iş yemeği organizasyonlarınızı gerçekleştirebilirsiniz"
          }
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
