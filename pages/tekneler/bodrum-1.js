import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const Bodrum1 = () => <BoatPage boatUrl="bodrum-1" />;

export default Bodrum1;
