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
  const boatsplit = boatUrl.split(" ");
  const boatid = boatsplit[1];
  console.log(boatsplit);

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
