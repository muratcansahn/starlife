import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaUmbrellaBeach,
  FaSnowflake,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import Image from "next/image";

const BoatCard = ({ boatimg, boatname, url }) => {
  const t = useTranslations("BoatIcons");

  return (
    ///BOAT CARD HEADER
    <div className="col-md-6 col-sm-12 col-lg-4">
      <div className="card mx-auto my-5  p-3">
        <Image
          className="card-img-top "
          src={boatimg}
          alt="Card image cap"
          height="210px"
          width="320px"
        />
        <div className="card-body">
          <p className="mt-2 font-12 ">VIP YACHT!</p>
          <h5 className="card-title pb-4 font-montserrat border-bottom">
            {boatname}
          </h5>
          {/* ICON SECTİON */}
          <div className=" py-4">
            <div className="d-flex icons font-lato  py-1 ">
              <FaUmbrellaBeach size="1.5em" color="#0087FF" />
              <p className="mx-3">{t("Icon1")}</p>
            </div>
            <div className="d-flex icons font-lato py-1">
              <FaSnowflake size="1.5em" color="#0087FF" />
              <p className="mx-3">{t("Icon2")}</p>
            </div>
            <div className="d-flex icons font-lato py-1">
              <FaUsers size="1.5em" color="#0087FF" />
              <p className="mx-3">{t("Icon3")}</p>
            </div>
            <div className="d-flex icons font-lato py-1">
              <IoDiamondSharp size="1.5em" color="#0087FF" />
              <p className="mx-3">{t("Icon4")}</p>
            </div>
            <div className="d-flex icons font-lato py-1">
              <FaShieldAlt size="1.5em" color="#0087FF" />
              <p className="mx-3">{t("Icon5")}</p>
            </div>
          </div>
          {/* BOAT BUTTON LINKS TO DYNAMIC ROUTING PAGE  */}

          <Link href={`/tekneler/${url}`}>
            <a className="btn btn-primary text-white">{t("Review")} </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
