import BoatPage from "../../page-templates/BoatPage";
export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const yacht2 = () => <BoatPage boatUrl="yacht2" />;

export default yacht2;
