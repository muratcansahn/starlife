import Image from "next/image";
import { FaRulerVertical } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { BsSpeedometer2 } from "react-icons/bs";

const YachtCard = () => {
  return (
    <div>
      <div class="row mx-2">
        <div class="col-md d-flex justify-content-center my-5 ">
          <div class="card ">
            <div className="card-top">
              <Image
                src="/images/alfa.jpg"
                className=""
                alt="..."
                height="210px"
                width="355px"
              />
            </div>

            <div class="card-body mx-auto ">
              <h5 class="card-title py-2 text-center ">YACHT-1</h5>
              <hr class="services-underline mb-2" />

              <div class="boat-card py-3 d-flex justify-content-between  ">
                <div class="icon-card px-2 d-flex align-items-center">
                  <FaRulerVertical size="24px" />{" "}
                  <p class="boat-icon-text my-auto mx-1">16m</p>
                </div>
                <div class="icon-card px-2 d-flex align-items-center">
                  <HiUsers size="24px" />
                  <p class="boat-icon-text my-auto mx-1">12</p>
                </div>
                <div class="icon-card px-2 d-flex align-items-center">
                  <GiKnifeFork size="24px" />{" "}
                  <p class="boat-icon-text my-auto mx-1">2</p>
                </div>
                <div class="icon-card px-2 d-flex align-items-center">
                  <BsSpeedometer2 size="24px" />{" "}
                  <p class="boat-icon-text my-auto mx-1">20 kn/s</p>
                </div>
              </div>
              <a
                href="./Yachts/3/index.html"
                class="btn btn-boat d-flex justify-content-center mx-auto align-items-center text-white mt-3"
              >
                Hemen incele
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default YachtCard;
