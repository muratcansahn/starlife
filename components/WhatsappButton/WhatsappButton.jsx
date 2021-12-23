import { useTranslations } from "next-intl";
import Link from "next/link";

import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = ({ boatname }) => {
  const t = useTranslations("Header");
  console.log(boatname);

  return (
    <div className="whatsapp-chat d-flex   align-items-center">
      <Link
        href={`https://api.whatsapp.com/send/?phone=+905323283867&text=Merhaba%2C+${
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
  );
};

export default WhatsappButton;
