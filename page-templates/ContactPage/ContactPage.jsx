import { useTranslations } from "next-intl";
import { Contact, Header } from ".";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Footer from "../../components/Footer/Footer.jsx";
import PageLogo from "../../components/PageLogo/PageLogo";
import Container from "../../components/Container";
import WhatsappButton from "../../components/WhatsappButton";

const ContactPage = () => {
  const t = useTranslations("Contact");
  return (
    <>
      <div className="container">
        <Container>
          <WhatsappButton /> <Contact />
          <Header />
        </Container>
        <div className="margin-top">
          {" "}
          <PageLogo pagename={t("pageName")} />{" "}
        </div>
        <div className="contact-icons py-5">
          <div className="contact-row  row">
            <div className="col-lg-6  ">
              <h2 className="my-4"> İstanbul {t("location")}</h2>
              <hr className="underline" />
              <div className=" d-flex adress my-3">
                <FiMapPin color="#1B4A6E" size="40px" className="mt-2" />
                <p className="mx-2 ">
                  Bebek Mah. Cevdetpaşa Cad.
                  <br className="" />
                  Beşiktaş / İSTANBUL
                </p>
              </div>
              <div className="phone-number d-flex  my-3">
                <FiPhone color="#1B4A6E" size="40px" className="mt-1" />
                <p className="mx-2 ">+90 532 058 99 78</p>
              </div>
              <div className="phone-number d-flex  my-3">
                <FiPhone color="#1B4A6E" size="40px" className="mt-1" />
                <p className="mx-2 ">+90 532 328 38 67</p>
              </div>
              <div className="e-mail d-flex  my-3">
                <FiMail color="#1B4A6E" size="40px" className="mt-1" />
                <p className="mx-2 ">info@sealifeyatkiralama.com</p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <h2 className="my-4">Muğla {t("location")}</h2>
              <hr className="underline" />

              <div className=" d-flex adress  my-3">
                <FiMapPin color="#1B4A6E" size="40px" className="mt-2" />
                <p className="mx-2 ">
                  Torba Yalıkavak
                  <br className="" />
                  MUĞLA
                </p>
              </div>

              <div className="phone-number d-flex  my-3">
                <FiPhone color="#1B4A6E" size="40px" className="mt-1" />
                <p className="mx-2 ">+90 532 328 38 67</p>
              </div>
              <div className="e-mail d-flex  my-3">
                <FiMail color="#1B4A6E" size="40px" className="mt-1" />
                <p className="mx-2 ">info@sealifeyatkiralama.com</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
