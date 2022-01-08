import { useTranslations } from "next-intl";
import Link from "next/link";
import { TiLocationOutline } from "react-icons/ti";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

import Image from "next/image";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <div className="footer d-flex flex-wrap justify-content-evenly">
        <div className="footer-sealife footer-col my-3 ">
          <Image
            className="sealife-logo-footer "
            src="/images/neva-logo.png"
            height={300}
            width={300}
            alt="Picture of the author"
          />
        </div>
        <div className="footer-col footer-text">
          <p>{t("Text")}</p>
        </div>

        <div className="contact-info footer-col my-3 ">
          <div className="footer-title font-18">{t("ContactInfo")}</div>
          <div className="contact-info-icons">
            <div className="contact-info-icon my-1 d-flex">
              <div className="footer-icon">
                <TiLocationOutline size="26px" />
              </div>
              <div className="footer-icon-text">
                Bebek Mah. Cevdetpaşa Cad. Beşiktaş / İSTANBUL
              </div>
            </div>
            <div className="contact-info-icon my-1 d-flex">
              <div className="footer-icon">
                <BiEnvelope size="26px" />
              </div>
              <div className="footer-icon-text">info@nevayatkiralama.com</div>
            </div>
            <div className="contact-info-icon my-1 d-flex">
              <div className="footer-icon">
                <MdOutlineHeadsetMic size="26px" />
              </div>
              <div className="footer-icon-text">
                <span className="footer-phone">+90 539 888 90 23</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
