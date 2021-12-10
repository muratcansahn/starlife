import { useState } from "react";
import { useTranslations } from "next-intl";

import { GraySection, ComponentHeader, Events } from ".";

const SealifeOnSocialMedia = ({ lang, img, title, text }) => {
  const t = useTranslations("SealifeOnSocialMedia");

  const [event, setEvent] = useState("marriage-proposal");

  return (
    <div className="happyandsatisfied">
      <GraySection>
        <ComponentHeader
          title={t("SocialMediaTitle")}
          text={t("SocialMediaText")}
        />
      </GraySection>

      <div className="second-header-comp">
        {" "}
        <ComponentHeader
          title={t("HappyandSatisfiedTitle")}
          text={t("HappyandSatisfiedText")}
        />{" "}
      </div>
      <div className="text-center">
        <div className=" p-2 bg-light border d-inline-block event-buttons">
          <button
            className={`btn p-2 font-14 font-700  btn-sm ${
              event === "marriage-proposal" ? "text-primary" : ""
            }`}
            onClick={() => setEvent("marriage-proposal")}
          >
            {t("MarriageProposalTitle")}
          </button>
          <span className="mx-1">|</span>
          <button
            className={`btn p-2 font-14 font-700 btn-sm ${
              event === "breakfast" ? "text-primary" : ""
            }`}
            onClick={() => setEvent("breakfast")}
          >
            {t("BreakfastTitle2")}
          </button>
          <span className="mx-1">|</span>

          <button
            className={`btn p-2 font-14 font-700  btn-sm ${
              event === "special-days" ? "text-primary" : ""
            }`}
            onClick={() => setEvent("special-days")}
          >
            {t("SpecialDaysTitle")}
          </button>
        </div>
      </div>

      {event === "marriage-proposal" && (
        <Events
          img={"../images/marriage-proposal.jpg"}
          title={t("MarriageProposalTitle")}
          text={t("MarriageProposalText")}
        />
      )}
      {event === "breakfast" && (
        <Events
          img={"../images/breakfast.jpg"}
          title={t("BreakFastTitle")}
          text={t("BreakFastText")}
        />
      )}

      {event === "special-days" && (
        <Events
          img={"../images/special-days.jpg"}
          title={t("SpecialDaysTitle")}
          text={t("SpecialDaysText")}
        />
      )}
    </div>
  );
};

export default SealifeOnSocialMedia;
