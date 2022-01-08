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
          <div className="contact-row   ">
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
                <p className="mx-2 ">info@nevayatkiralama.com</p>
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.52583297281!2d29.045763415253774!3d41.07935627929359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab61db8e6c3f7%3A0x8259139cb06914f3!2zQmViZWssIENldmRldCBQYcWfYSBDZC4sIDM0MzQyIEJlxZ9pa3RhxZ8vxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1640265651668!5m2!1sen!2str"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
