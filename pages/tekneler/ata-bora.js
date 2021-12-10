import BoatPage from "../../page-templates/BoatPage";
export function getStaticProps({ locale }) {
  "Current Locale", locale;
  return {
    props: {
      messages: require(`../../locales/${locale}.json`),
    },
  };
}

const AtaBora = () => <BoatPage boatUrl="ata-bora" />;

export default AtaBora;
