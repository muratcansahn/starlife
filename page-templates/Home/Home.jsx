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
