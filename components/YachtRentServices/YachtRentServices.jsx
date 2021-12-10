import { useTranslations } from "next-intl";
import { ComponentHeader } from ".";

const YachtRentServices = () => {
  const t = useTranslations("YachtRent");

  return (
    <div className="container">
      <ComponentHeader title={t("YachtRentTitle")} text={t("YachtRentText")} />
      <div className="yacht-rent-services-top d-flex flex-column align-items-center  pt-5">
        <div className="rent-images d-flex justify-content-between w-100 my-4">
          <img
            src="./images/sealife-yacht.jpg"
            className="yacht"
            alt="..."
            width="467"
            height="351"
          />
          <div className="three-steps my-auto">
            <div className="row justify-content-center">
              <div className="col mx-3 my-3 col-1">
                {" "}
                <img
                  src="./images/col-1.png"
                  className=""
                  alt="..."
                  width="120"
                  height="100"
                />
                <p className="rent-pictures text-center position-relative ">
                  {t("Col1")}
                </p>
                <p className="number font-montserrat">1</p>
              </div>
              <div className="col mx-3 my-3 col-2">
                <img
                  src="./images/col-2.png"
                  className=""
                  alt="..."
                  width="120"
                  height="100"
                />
                <p className="rent-pictures text-center "> {t("Col2")}</p>
                <p className="number font-montserrat">2</p>
              </div>{" "}
              <div className="col mx-3 my-3 col-3">
                {" "}
                <img
                  src="./images/col-3.png"
                  className=""
                  alt="..."
                  width="120"
                  height="100"
                />
                <p className="rent-pictures text-center "> {t("Col3")}</p>
                <p className="number font-montserrat">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YachtRentServices;
