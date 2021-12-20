import Image from "next/image";
import { FaRulerVertical } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { BsSpeedometer2 } from "react-icons/bs";

const YachtCard = ({
  boatimg,
  boatDescription,
  boatid,
  boatheight,
  boatcapacity,
  boatfood,
}) => {
  return (
    <div class="">
      <div class=" mx-2 d-flex justify-content-center my-5 ">
        <div class="card ">
          <div className="card-top">
            <Image
              src={boatimg}
              className=""
              alt="..."
              height="210px"
              width="355px"
            />
          </div>

          <div class="card-body ">
            <h5 class="card-title py-1 text-center ">YACHT-{boatid}</h5>

            <div class="boat-card py-2 d-flex justify-content-between  ">
              <div class="icon-card px-2 d-flex align-items-center">
                <FaRulerVertical size="24px" />{" "}
                <p class="boat-icon-text my-auto mx-1">{boatheight} </p>
              </div>
              <div class="icon-card px-2 d-flex align-items-center">
                <HiUsers size="24px" />
                <p class="boat-icon-text my-auto mx-1">{boatcapacity} </p>
              </div>
              <div class="icon-card px-2 d-flex align-items-center">
                <GiKnifeFork size="24px" />{" "}
                <p class="boat-icon-text my-auto mx-1">{boatfood} </p>
              </div>
              <div class="icon-card px-2 d-flex align-items-center">
                <BsSpeedometer2 size="24px" />{" "}
                <p class="boat-icon-text my-auto mx-1">20 kn/s</p>
              </div>
            </div>
            <p className="mt-2">{boatDescription}</p>
            <a
              href="./Yachts/3/index.html"
              class="btn btn-boat text-white position-absolute  start-50 translate-middle-x "
            >
              Hemen incele
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YachtCard;
