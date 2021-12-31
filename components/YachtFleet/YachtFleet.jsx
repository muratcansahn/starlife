import { useState } from "react";
import YachtCard from "../YachtCard";
import { BoatData } from "../../utils/boats";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { set } from "nprogress";

const YachtFleet = () => {
  const router = useRouter();
  const t = useTranslations("YachtFleet");
  const [location, setLocation] = useState("İstanbul");
  const [yachtModel, setYachtModel] = useState("motoryacht");
  let Boats = BoatData.filter(
    (boat) => boat.type === yachtModel && boat.location === location
  );
  const handleYachtModel = (model, location2) => {
    if (model === "motoryacht") {
      setLocation(location2);
      let Boats = BoatData.filter(
        (boat) => boat.type === model && boat.location === location
      );
      setYachtModel(model);
    } else {
      let Boats = BoatData.filter((boat) => boat.type === model);
      setYachtModel(model);
    }

    console.log(Boats);
  };

  return (
    <div>
      <div className="text-center">
        <div className="  py-2 px-3  border d-inline-block location-buttons">
          <button
            className={`btn py-1 px-1 font-18 font-700  btn-sm ${
              yachtModel === "motoryacht" ? " text-primary" : ""
            }`}
            onClick={() => handleYachtModel("motoryacht", "İstanbul")}
          >
            {t("motoryachts")}
          </button>
          <span className="mx-1 ">|</span>
          <button
            className={`btn py-1 px-3 font-18 font-700  btn-sm ${
              yachtModel === "invite-yacht" ? "text-primary" : ""
            }`}
            onClick={() => handleYachtModel("invite-yacht", "İstanbul")}
          >
            {t("invitationBoats")}{" "}
          </button>
        </div>
        <div className="my-2">
          {" "}
          {yachtModel === "motoryacht" ? (
            <div className="  py-2 px-3  border d-inline-block location-buttons">
              <button
                className={`btn py-1 px-1 font-18 font-700  btn-sm ${
                  yachtModel === "motoryacht" ? " text-primary" : ""
                }`}
                onClick={() => handleYachtModel("motoryacht", "İstanbul")}
              >
                İstanbul
              </button>
              <span className="mx-1 ">|</span>

              <button
                className={`btn py-1 px-1 font-18 font-700  btn-sm ${
                  yachtModel === "motoryacht" ? " text-primary" : ""
                }`}
                onClick={() => handleYachtModel("motoryacht", "Muğla")}
              >
                Muğla
              </button>
            </div>
          ) : (
            1
          )}
        </div>
      </div>
      <div className="yachts row ">
        {Boats.map((boat, i) => {
          return (
            <div className="col boatcard">
              <YachtCard
                key={i}
                boatimg={boat.CardImage}
                boatname={boat.Name}
                boatDescription={t(`yacht${boat.id}`)}
                url={boat.id}
                boatid={boat.id}
                boatfood={boat.food}
                boatheight={boat.height}
                boatcapacity={boat.capacity}
                reviewbtn={t("reviewbtn")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YachtFleet;
