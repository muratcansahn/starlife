import { useState } from "react";
import YachtCard from "../YachtCard";
import { BoatData } from "../../utils/boats";

const YachtFleet = () => {
  const [location, setLocation] = useState("İstanbul");
  const [yachtModel, setYachtModel] = useState("motoryacht");
  const Boats = BoatData.filter((boat) => boat.type === yachtModel);
  console.log(Boats);
  return (
    <div>
      <div className="text-center">
        <div className="  py-2 px-4  border d-inline-block location-buttons">
          <button
            className={`btn py-1 px-3 font-18 font-700  btn-sm ${
              yachtModel === "motoryacht" ? " bg-light" : ""
            }`}
            onClick={() => setYachtModel("motoryacht")}
          >
            Motoryatlar
          </button>
          <span className="mx-1 ">|</span>
          <button
            className={`btn py-1 px-3 font-18 font-700  btn-sm ${
              yachtModel === "invite-yacht" ? "text-primary" : ""
            }`}
            onClick={() => setYachtModel("invite-yacht")}
          >
            Davet Tekneleri
          </button>
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
                boatDescription={boat.description}
                url={boat.url}
                boatid={boat.id}
                boatfood={boat.food}
                boatheight={boat.height}
                boatcapacity={boat.capacity}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YachtFleet;
