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
  YachtCard,
} from ".";

const Home = () => {
  return (
    <main className="">
      <WhatsappButton />
      <Header />
      <Banner />

      <HomePageText />
      <YachtFleet />
      <Features />

      <Footer />
    </main>
  );
};
export default Home;
