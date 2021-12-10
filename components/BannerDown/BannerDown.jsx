import { useTranslations } from "next-intl";

///import icons
import { FaAnchor, FaUsers } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdBoat } from "react-icons/io";

const BannerDown = () => {
  const t = useTranslations("BannerDown");

  return (
    <div className="bannerdown d-flex">
      <div className="bannerdown-icons d-flex flex-wrap justify-content-center align-content-center m-auto">
        <div className="bannerdown-icon font-16 d-flex position-relative justify-content-center">
          <div className="icon-bannerdown ">
            <FaAnchor size="90px" color="white" />
          </div>
          <div className="text d-flex flex-column mx-2">
            <div className="number-inside">5+</div>
            <div className="text-inside font-18 font-lato ">
              {t("Experience")}
            </div>
          </div>
        </div>
        <div className="bannerdown-icon font-16 d-flex position-relative justify-content-center">
          <div className="icon-bannerdown ">
            <IoDiamondOutline size="90px" color="white" />
          </div>
          <div className="text d-flex flex-column mx-2">
            <div className="number-inside">10K+</div>
            <div className="text-inside font-18 font-lato ">
              {t("Rezervation")}
            </div>
          </div>
        </div>
        <div className="bannerdown-icon font-16 d-flex position-relative justify-content-center">
          <div className="icon-bannerdown ">
            <IoMdBoat size="90px" color="white" />
          </div>
          <div className="text d-flex flex-column mx-2">
            <div className="number-inside">24</div>
            <div className="text-inside font-18 font-lato ">
              {t("YachtNumber")}{" "}
            </div>
          </div>
        </div>
        <div className="bannerdown-icon font-16 d-flex position-relative justify-content-center">
          <div className="icon-bannerdown ">
            <FaUsers size="90px" color="white" />
          </div>
          <div className="text d-flex flex-column mx-2">
            <div className="number-inside">100K+</div>
            <div className="text-inside font-18 font-lato ">
              {t("HappyCustomer")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDown;
