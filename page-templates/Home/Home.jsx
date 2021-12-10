import {
  Contact,
  Header,
  Banner,
  YachtRentServices,
  YachtFleet,
  Policy,
  BannerDown,
  WhySealife,
  SealifeOnSocialMedia,
  Footer,
  Container,
  UpperFooter,
  WhatsappButton,
} from ".";

const Home = () => {
  return (
    <main className="">
      <Container>
        <WhatsappButton />
        <Contact />
        <Header />
      </Container>
      <Banner />
      <YachtRentServices />
      <YachtFleet />
      <Policy />
      <BannerDown />
      <WhySealife />
      <SealifeOnSocialMedia />
      <UpperFooter />
      <Footer />
    </main>
  );
};
export default Home;
