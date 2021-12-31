import { useTranslations } from "next-intl";
import Link from "next/link";

import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const WhatsappButton = ({ boatname }) => {
  const t = useTranslations("Header");
  console.log(boatname);

  return (
    <div>
      <div className="call-button ">
        <a href="tel:+905398889023">
          <FiPhoneCall color="white" size="30px" className="me-2" />
          <span className="live-support-text">{t("callUs")}</span>
        </a>
      </div>
      <div className="whatsapp-chat d-flex   align-items-center">
        <Link
          href={`https://api.whatsapp.com/send/?phone=+905398889023&text=Merhaba%2C+${
            boatname ?? "hizmetleriniz"
          }+hakk%C4%B1nda+bilgi+almak+istiyorum.&app_absent=0`}
        >
          <div>
            {" "}
            <BsWhatsapp color="white" size="30px" className="" />{" "}
            <span className="live-support-text">{t("whatsAppBtn")}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhatsappButton;
