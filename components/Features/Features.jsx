import { BiAnchor } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const Features = () => {
  //Localization
  const router = useRouter();
  const t = useTranslations("Features");
  return (
    <div>
      <div
        className=" row features-row  d-flex
      "
      >
        <div className=" box box-1 text-center col-lg-4 col-md-12 ">
          <div className="box-icon">
            {" "}
            <BiAnchor size="60px" color="#FFFFF" />
          </div>
          <div className="textbox ">
            <p className="box-title my-3">{t("UniqueExperienceTitle")}</p>
            <p className="box-text my-3">{t("UniqueExperienceText")}</p>
          </div>
        </div>
        <div className=" box box-1 text-center col-lg-4 col-md-12  ">
          <div className="box-icon">
            {" "}
            <GiPartyPopper size="60px" color="#FFFFF" />
          </div>
          <div className="textbox">
            <p className="box-title my-3">{t("SpecialEventsTitle")}</p>
            <p className="box-text my-3">{t("SpecialEventsText")}</p>
          </div>
        </div>
        <div className=" box box-1 text-center col-lg-4 col-md-12  ">
          <div className="box-icon">
            {" "}
            <FaUsers size="60px" color="#FFFFF" />
          </div>
          <div className="textbox">
            <p className="box-title my-3">{t("SmileServicesTitle")}</p>
            <p className="box-text my-3">{t("SmileServicesText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
