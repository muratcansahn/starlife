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
        <div className="  py-2 px-3  border d-inline-block location-buttons my-3">
          <button
            className={`btn py-1 px-1 font-18 font-700  btn-sm text-white`}
            onClick={() => handleYachtModel("motoryacht", "İstanbul")}
          >
            {t("motoryachts")}
          </button>
          <span className="mx-1 ">|</span>
          <button
            className={`btn py-1 px-1 font-18 font-700  btn-sm text-white`}
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
                className={`btn py-1 px-1 font-18 font-700  btn-sm text-white`}
                onClick={() => handleYachtModel("motoryacht", "İstanbul")}
              >
                İstanbul
              </button>
              <span className="mx-1 ">|</span>

              <button
                className={`btn py-1 px-1 font-18 font-700  btn-sm text-white`}
                onClick={() => handleYachtModel("motoryacht", "Muğla")}
              >
                Muğla
              </button>
            </div>
          ) : (
            ""
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
      <section class="description">
        <div class="bg-light container ">
          <h4 class="pb-3  pt-4 text-center">
            {" "}
            İSTANBUL ANLIK HAVA VE RÜZGAR DURUMU
          </h4>
          <iframe
            width="100%"
            height="550"
            src="https://embed.windy.com/embed2.html?lat=41.033&lon=29.047&detailLat=41.080&detailLon=29.047&width=650&height=450&zoom=11&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=default&metricTemp=default&radarRange=-1"
            frameborder="0"
            className="mx-auto"
          ></iframe>{" "}
        </div>
      </section>
    </div>
  );
};

export default YachtFleet;
