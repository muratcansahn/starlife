import {
  BoatPageHead,
  BoatData,
  Container,
  Contact,
  Header,
  Footer,
  YachtDetailPage,
  WhatsappButton,
} from ".";

const BoatPage = ({ boatUrl }) => {
  // Get boat data from url prop
  console.log(boatUrl);
  const boatid = boatUrl.substr(-1);

  return (
    <>
      <BoatPageHead />
      <main>
        <YachtDetailPage id={boatid} />
        <Footer />
      </main>
    </>
  );
};

export default BoatPage;
