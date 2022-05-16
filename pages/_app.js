import { useState } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import Script from "next/script";

import NProgress from "nprogress";
import Router from "next/router";

import LoadingSpinner from "../components/LoadingSpinner";

// Localization
import { NextIntlProvider } from "next-intl";

// Global Styles
import "../styles/globals.scss";
import "../styles/variables.scss";
import "../styles/Nprogress.scss";

// Page Styles
import "../page-templates/Home/Home.scss";
import "../page-templates/YachtDetailPage/YachtDetailPage.scss";

// Component Styles
import "../components/Banner/Banner.scss";
import "../components/BannerDown/BannerDown.scss";
import "../components/Contact/Contact.scss";
import "../components/GraySection/GraySection.scss";
import "../components/Header/Header.scss";
import "../components/LangSwitcher/LangSwitcher.scss";
import "../components/LoadingSpinner/LoadingSpinner.scss";
import "../components/YachtRentServices/YachtRentServices.scss";
import "../components/YachtFleet/YachtFleet.scss";
import "../components/Policy/Policy.scss";
import "../components/ComponentHeader/ComponentHeader.scss";
import "../components/WhySealife/WhySealife.scss";
import "../components/Events/Events.scss";
import "../components/UpperFooter/UpperFooter.scss";
import "../components/Footer/Footer.scss";
import "../components/WhatsappButton/WhatsappButton.scss";
import "../page-templates/ContactPage/ContactPage.scss";
import "../components/PageLogo/PageLogo.scss";
import "../page-templates/AboutUsPage/AboutUsPage.scss";
import "../page-templates/ServicePage/ServicePage.scss";
import "../components/Container/Container.scss";
import "../components/Features/Features.scss";
import "../components/HomePageText/HomePageText.scss";
import "../components/YachtCard/YachtCard.scss";
import "../components/MobileNavbar/MobileNavbar.scss";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  NProgress.configure({
    showSpinner: false,
  });

  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
    setLoading(false);
  });

  {
    /* <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXDPRREDPL"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-CXDPRREDPL'); */
  }
  return (
    <SSRProvider>
      <NextIntlProvider
        messages={pageProps.messages}
        // onError={onError}
        // getMessageFallback={getMessageFallback}
      >
        {loading && <LoadingSpinner />}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CXDPRREDPL`}
        />

        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXDPRREDPL', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
        <Component {...pageProps} />
      </NextIntlProvider>
    </SSRProvider>
  );
}

export default MyApp;
