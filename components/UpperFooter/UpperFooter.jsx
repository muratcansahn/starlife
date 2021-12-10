import { useTranslations } from "next-intl";

import { UpperFooterText } from "./lang";
import { FaAnchor } from "react-icons/fa";

const UpperFooter = () => {
  const t = useTranslations("UpperFooter");

  return (
    <div className="bluebg-box  align-items-center justify-content-around">
      <div className="bluebg-left d-flex">
        <div className="bluebg-icon">
          <FaAnchor size="110px" color="white" />{" "}
        </div>
        <div className="bluebg-text">{t("UpperFooterText")} </div>
      </div>
      <div className="bluebg-right ">
        <img
          src="./images/upper-footer-bg.jpg"
          className=" upper-footer-img "
        />
      </div>
    </div>
  );
};

export default UpperFooter;
