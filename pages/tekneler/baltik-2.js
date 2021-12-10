import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const Baltik2 = () => <BoatPage boatUrl="baltik-2" />;

export default Baltik2;
