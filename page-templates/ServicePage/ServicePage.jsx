import { Header } from ".";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer/Footer";
import PageLogo from "../../components/PageLogo/PageLogo";

import { pageTitle } from "./lang";

const ServicePage = ({
  servicespagetext,
  servicespagetitle,
  servicescarousel,
}) => {
  return (
    <main className="">
      <div className="top-section container">
        <Header />
        <h1 className="text-center services-title">{servicespagetitle} </h1>
        <div className="services-carousel my-4">{servicescarousel}</div>
        <p className="servicespagetext">{servicespagetext}</p>
      </div>
      <Footer />
    </main>
  );
};
export default ServicePage;
