import { Header } from ".";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer/Footer";
import PageLogo from "../../components/PageLogo/PageLogo";

import { pageTitle } from "./lang";

const ServicePage = ({ servicespagetitle, servicespagetext }) => {
  return (
    <main className="">
      <div className="top-section container">
        <Contact />
        <Header />
        <PageLogo pagename={servicespagetitle} />
        <p className="servicespagetext">{servicespagetext}</p>
      </div>
      <Footer />
    </main>
  );
};
export default ServicePage;
