import { useTranslations } from "next-intl";
import Link from "next/link";

/////import icons from react-icons
import { MdPhone, MdMail } from "react-icons/md";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import WhatsappButton from "../WhatsappButton";

const Contact = () => {
  const t = useTranslations("Header");
  return (
    <div className=" justify-content-between my-3  container contact-bar border-bottom pb-3">
      <WhatsappButton />

      <div className="contact-text d-flex py-1 ">
        <div className="phone me-2">
          <p className="mx-1 my-auto font-14">
            <MdPhone color="#0087FF" size="1.5em" className="me-1" />{" "}
            <span className="text-muted">7/24 {t("call")}</span> +90 532 058 99
            78
          </p>
        </div>
        <div className="call-us font-14 me-4">{t("callUs")} </div>
        <div className="email d-flex align-items-center font-14">
          <MdMail color="#0087FF" size="1.5em" className="me-1" />{" "}
          info@sealifekiralama.com
        </div>
      </div>
      <div className="icons d-flex ">
        <div className="facebook-icon mx-3">
          {" "}
          <Link href="https://www.facebook.com/Sealifeyat%C3%A7%C4%B1l%C4%B1k-625043754630767/">
            <a target="_blank">
              <BsFacebook size="24px" color="black" />
            </a>
          </Link>
        </div>
        <div className="instagram-icon mx-3">
          <Link href="https://www.instagram.com/sealife_yatkiralama/">
            <a target="_blank">
              <BsInstagram size="24px" color="black" />
            </a>
          </Link>
        </div>
        <div className="youtube-icon mx-3">
          <BsYoutube size="24px" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
