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
  Features,
  HomePageText,
} from ".";

const Home = () => {
  return (
    <main className="">
      <Container>
        <WhatsappButton />
        <Header />
      </Container>
      <Banner />
      <Features />
      <HomePageText />
      <YachtFleet />
      <SealifeOnSocialMedia />
      <UpperFooter />
      <Footer />
    </main>
  );
};
export default Home;
