import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const Bodrum2 = () => <BoatPage boatUrl="bodrum-2" />;

export default Bodrum2;
