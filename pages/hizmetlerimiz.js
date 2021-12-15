import { useTranslations } from "next-intl";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
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

        <div className="stories d-flex  mx-auto">
          <div className="story ">
            <a href="/images/2010.jpg" data-fancybox="gallery" data-caption="">
              <Image
                src="/images/2010.jpg"
                className="story-image "
                alt=""
                height={50}
                width={50}
              />
            </a>

            <p className="story-text text-center"> İş Yemeği</p>
          </div>

          <div className="story ">
            <a href="/images/2015.jpg" data-fancybox="gallery" data-caption="">
              <Image
                src="/images/2015.jpg"
                className="story-image "
                alt=""
                height={50}
                width={50}
              />
            </a>

            <p className="story-text text-center"> İş Yemeği</p>
          </div>
          <div className="story ">
            <a href="/images/2015.jpg" data-fancybox="gallery" data-caption="">
              <Image
                src="/images/2015.jpg"
                className="story-image "
                alt=""
                height={50}
                width={50}
              />
            </a>

            <p className="story-text text-center"> İş Yemeği</p>
          </div>
          <div className="story ">
            <a href="/images/2015.jpg" data-fancybox="gallery" data-caption="">
              <Image
                src="/images/2015.jpg"
                className="story-image "
                alt=""
                height={50}
                width={50}
              />
            </a>

            <p className="story-text text-center "> İş Yemeği</p>
          </div>
          <div className="story ">
            <a href="/images/2015.jpg" data-fancybox="gallery" data-caption="">
              <Image
                src="/images/2015.jpg"
                className="story-image "
                alt=""
                height={50}
                width={50}
              />
            </a>

            <p className="story-text text-center"> İş Yemeği</p>
          </div>
        </div>
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
