import BoatPage from "../../page-templates/BoatPage";

export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const yacht4 = () => <BoatPage boatUrl="yacht 4" />;

export default yacht4;
