import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaPercent } from "react-icons/fa";
import PageLogo from "../../components/PageLogo/PageLogo";
import Image from "next/image";

import { IoDiamond, IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsShieldFillCheck } from "react-icons/bs";
import {
  Contact,
  Container,
  GraySection,
  ComponentHeader,
  Header,
  Footer,
  WhatsappButton,
} from ".";
import Events from "../../components/Events";

const AboutUsPage = () => {
  const [date, setDate] = useState("2010");
  const t = useTranslations("AboutUsPage");

  return (
    <main>
      <WhatsappButton />
      <Header />

      <div className="margin-top">
        {" "}
        <PageLogo pagename={t("PageName")} />
        <div className="row mx-5 my-4">
          <div className="col my-4">
            <div className="aboutus-icon mx-auto">
              <FaPercent size="50px" className="icon" />
            </div>
            <div className="aboutus-textbox text-center">
              <p className="aboutus-icon-title ">{t("Icon1Title")}</p>
              <p className="aboutus-icon-text font-16 font-lato">
                {t("Icon1Text")}
              </p>
            </div>
          </div>
          <div className="col">
            <div className="aboutus-icon mx-auto">
              <IoDiamond size="50px" className="icon" />
            </div>
            <div className="aboutus-textbox text-center">
              <p className="aboutus-icon-title ">{t("Icon2Title")}</p>
              <p className="aboutus-icon-text font-16 font-lato">
                {t("Icon2Text")}
              </p>
            </div>
          </div>
          <div className="col">
            <div className="aboutus-icon mx-auto">
              <BsShieldFillCheck size="50px" className="icon" />
            </div>
            <div className="aboutus-textbox text-center">
              <p className="aboutus-icon-title ">{t("Icon3Title")}</p>
              <p className="aboutus-icon-text font-16 font-lato">
                {t("Icon3Title")}
              </p>
            </div>
          </div>
        </div>{" "}
      </div>

      <GraySection className="">
        {" "}
        <div className="about-sealife mx-auto">
          {" "}
          <ComponentHeader
            title={t("AboutSealifeTitle")}
            text={t("AboutSealifeText")}
          />
        </div>
      </GraySection>
      <p className="updated-yachts-title text-center ">
        {t("UpdatedYachtModels")}
      </p>
      <div className="updated-yachts">
        <div
          className="carousel-aboutus d-flex justify-content-center
        "
        ></div>
        <div className="mobile-images">
          <img
            className="img-fluid my-3 ml-1"
            src="/images/about-us/2.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="updated-yacht-fleet text-center container my-4">
        <p className="">{t("CurrentyachtFleetTitle")} </p>
        <p>{t("CurrentyachtFleetText")}</p>
        <div className="boat-features   ">
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature1")} </p>
          </div>
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature2")} </p>
          </div>
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature3")} </p>
          </div>{" "}
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature4")} </p>
          </div>{" "}
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature5")} </p>
          </div>{" "}
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature6")} </p>
          </div>{" "}
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature7")} </p>
          </div>{" "}
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature8")} </p>
          </div>{" "}
          <div className="boat-feature d-flex justify-content-center">
            {" "}
            <IoCheckmarkDoneSharp
              size="30px"
              color="#36BE4A"
              className="mx-3"
            />
            <p>{t("Feature9")} </p>
          </div>
        </div>
      </div>
      <div className="sealife-history">
        <ComponentHeader
          title={t("SealifeHistoryTitle")}
          text={t("SealifeHistoryText")}
        />
        <div className="text-center">
          <div className=" p-2 bg-light border d-inline-block event-buttons">
            <button
              className={`btn py-1 px-3 font-18 font-700  btn-sm ${
                date === "2010" ? "text-primary" : ""
              }`}
              onClick={() => setDate("2010")}
            >
              2010
            </button>
            <span className="mx-1">|</span>
            <button
              className={`btn py-1 px-3 font-18 font-700 btn-sm ${
                date === "2015" ? "text-primary" : ""
              }`}
              onClick={() => setDate("2015")}
            >
              2015{" "}
            </button>
            <span className="mx-1">|</span>

            <button
              className={`btn py-1 px-3 font-18 font-700  btn-sm ${
                date === "2020" ? "text-primary" : ""
              }`}
              onClick={() => setDate("2020")}
            >
              2020{" "}
            </button>
          </div>
        </div>
        {date === "2010" && (
          <Events
            img={"../images/2010.jpg"}
            title={t("2010Title")}
            text={t("2010Text")}
          />
        )}
        {date === "2015" && (
          <Events
            img={"../images/2015.jpg"}
            title={t("2015Title")}
            text={t("2015Text")}
          />
        )}{" "}
        {date === "2020" && (
          <Events
            img={"../images/2015.jpg"}
            title={t("2020Title")}
            text={t("2020Text")}
          />
        )}
      </div>
      <Footer />
    </main>
  );
};

export default AboutUsPage;
