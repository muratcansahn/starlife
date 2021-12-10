import { useTranslations } from "next-intl";
import Link from "next/link";
import { TiLocationOutline } from "react-icons/ti";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";

import Image from "next/image";

import logoPic from "../../public/images/sealife-logo-footer.png";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      <div className="footer d-flex flex-wrap justify-content-evenly">
        <div className="footer-sealife footer-col my-3 ">
          <div className="footer-logo">
            <Image
              className="sealife-logo-footer "
              src={logoPic}
              alt="Picture of the author"
            />
          </div>
          <div className="footer-logo-text font-16">{t("LogoText")}</div>
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
              <div className="footer-icon-text">
                info@sealifeyatkiralama.com
              </div>
            </div>
            <div className="contact-info-icon my-1 d-flex">
              <div className="footer-icon">
                <MdOutlineHeadsetMic size="26px" />
              </div>
              <div className="footer-icon-text">
                <span className="footer-phone">+90 532 058 99 78</span>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="corporate my-3">
          <div className="footer-title">{t("Corporal")}</div>
          <ul>
            <li>
              {" "}
              <Link href="/hakkimizda">
                <a>{t("AboutUs")}</a>
              </Link>
            </li>

            <li>
              {" "}
              <Link href="/iletisim">
                <a>{t("ContactFooter")}</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Follow-us my-3">
          {" "}
          <div className=" footer-title">{t("FollowUs")}</div>{" "}
          <div className="social-icons d-flex">
            <div className="social-icon mx-1">
              <Link href="https://www.facebook.com/Sealifeyat%C3%A7%C4%B1l%C4%B1k-625043754630767/">
                <a className="">
                  <BsFacebook
                    size="16px"
                    style={{ marginLeft: "9px", marginTop: "8px" }}
                    color="rgb(142 142 142)"
                  />
                </a>
              </Link>
            </div>
            <div className="social-icon mx-1">
              <Link href="https://www.instagram.com/sealife_yatkiralama/">
                <a className="">
                  <BsInstagram
                    size="16px"
                    style={{ marginLeft: "9px", marginTop: "8px" }}
                    color="rgb(142 142 142)"
                  />
                </a>
              </Link>
            </div>
            <div className="social-icon mx-1">
              {" "}
              <BsYoutube
                size="16px"
                style={{ marginLeft: "9px", marginTop: "8px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nuensoft-logo text-center">
        <a
          className="text-active  "
          href="https://www.nuensoft.com/"
          target="_blank"
        >
          {" "}
          <Image src="/images/nuensoft-logo.png" width={120} height={30} />
        </a>
      </div>
    </>
  );
};

export default Footer;
