import { useTranslations } from "next-intl";

import { ComponentHeader } from ".";

const WhySealife = () => {
  const t = useTranslations("WhySealife");

  return (
    <div>
      <ComponentHeader
        title={t("WhySealifeTitle")}
        text={t("WhySealifeText")}
      />
      <div className="row my-4 px-2">
        <div className="col d-flex  flex-column col-first">
          <div className="why-sealife-box">
            <p className="why-sealife-title font-montserrat ">
              {" "}
              {t("Experience5Year")}
            </p>

            <p className="why-sealife-text font-montserrat font-16 ">
              {/* use montserrat instead of lato .Because lato don't support Turkish letters */}
              {t("Experience5YearText")}
            </p>
          </div>
          <div className="why-sealife-box ">
            <p className="why-sealife-title font-montserrat ">
              {t("SpecialDayService")}
            </p>

            <p className="why-sealife-text font-montserrat font-16 ">
              {/* use montserrat instead of lato .Because lato don't support Turkish letters */}
              {t("SpecialDayServiceText")}{" "}
            </p>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          {" "}
          <img
            src="../images/why-sealife-yacht.jpg"
            className="why-sealife-img"
            alt="..."
            width="415"
            height="415"
          />
        </div>
        <div className="col d-flex flex-column  ">
          <div className="why-sealife-box">
            <p className="why-sealife-title font-montserrat ">
              {t("FirstClassFleet")}
            </p>

            <p className=" font-montserrat font-16 ">
              {/* use montserrat instead of lato .Because lato don't support Turkish letters */}
              {t("FirstClassFleetText")}
            </p>
          </div>
          <div className="why-sealife-box">
            <p className="why-sealife-title font-montserrat ">
              {t("MarriageProposal")}
            </p>

            <p className="font-montserrat font-16 ">
              {/* use montserrat instead of lato .Because lato don't support Turkish letters */}
              {t("MarriageProposal")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySealife;
