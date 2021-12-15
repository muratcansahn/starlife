import { useTranslations } from "next-intl";
import { Contact, Header } from ".";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMapMarkedAlt } from "react-icons/fa";
import Footer from "../../components/Footer/Footer.jsx";
import PageLogo from "../../components/PageLogo/PageLogo";
import Container from "../../components/Container";
import WhatsappButton from "../../components/WhatsappButton";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import Link from "next/link";

const ContactPage = () => {
  const t = useTranslations("Contact");
  return (
    <>
      <div className="container">
        <WhatsappButton />
        <Header />
        <div className="contact-icons py-5">
          <div className="contact-row  ">
            <div className="">
              <h2 className="my-4 text-center"> İletişim Bilgilerimiz</h2>
              <hr className="underline" />
              <div className=" d-flex adress my-3">
                <FaMapMarkedAlt color="#1B4A6E" size="40px" className="mt-2" />
                <p className="mx-2 ">
                  Bebek Mah. Cevdetpaşa Cad.
                  <br className="" />
                  Beşiktaş / İSTANBUL
                </p>
              </div>
              <div className="phone-number d-flex  my-3">
                <FiPhone color="#1B4A6E" size="40px" className="mt-1" />
                <p className="mx-2 ">+90 539 888 90 23</p>
              </div>

              <div className="e-mail d-flex  my-3">
                <FiMail color="#1B4A6E" size="40px" className="mt-1" />
                <p className="mx-2 ">Starlifeyatch@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-social-media-icons">
            <Link href="https://www.instagram.com/starlife_yatkiralama/">
              <a target="_blank">
                <BsInstagram size="24px" color="white" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
