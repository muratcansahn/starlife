import Head from "next/head";
import { useTranslations } from "use-intl";

const BoatPageHead = ({ boat }) => {
  const t = useTranslations("Home");
  return (
    <Head>
      <title>
        {boat.Name} | {t("title")}
      </title>
      <meta
        name="description"
        content={`${boat.Name} teknemizin tüm detayları için tıklayın`}
      />
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
    </Head>
  );
};

export default BoatPageHead;
