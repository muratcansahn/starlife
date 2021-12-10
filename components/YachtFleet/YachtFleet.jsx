import { useTranslations } from "next-intl";
import { GraySection, ComponentHeader } from ".";
import BoatCard from "../BoatCard/BoatCard";
import { BoatData } from "../../utils/boats";
import { useState } from "react";

const YachtFleet = () => {
  const t = useTranslations("YachtFleet");

  const [location, setLocation] = useState("İstanbul");
  const Boats = BoatData.filter((boat) => boat.location === location);
  return (
    <GraySection>
      <ComponentHeader
        title={t("YachtFleetTitle")}
        text={t("YachtFleetText")}
      />
      <div className="text-center">
        <div className="  py-2 px-4  border d-inline-block location-buttons">
          <button
            className={`btn py-1 px-3 font-18 font-700  btn-sm ${
              location === "İstanbul" ? "text-primary" : ""
            }`}
            onClick={() => setLocation("İstanbul")}
          >
            İstanbul
          </button>
          <span className="mx-1">|</span>
          <button
            className={`btn py-1 px-3 font-18 font-700  btn-sm ${
              location === "Muğla" ? "text-primary" : ""
            }`}
            onClick={() => setLocation("Muğla")}
          >
            Muğla
          </button>
        </div>
      </div>

      <div className="container">
        <div className="yachts row">
          {Boats.map((boat, i) => {
            return (
              <BoatCard
                key={i}
                boatimg={boat.CardImage}
                boatname={boat.Name}
                url={boat.url}
              />
            );
          })}
        </div>
      </div>
    </GraySection>
  );
};

export default YachtFleet;
