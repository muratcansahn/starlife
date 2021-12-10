import { useTranslations } from "next-intl";
import { IoDiamondOutline } from "react-icons/io5";
import { FaShieldAlt, FaMoneyBillAlt, FaGlassCheers } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Policy = () => {
  const t = useTranslations("Policy");
  return (
    <div className=" policy position-relative ">
      <div className=" d-flex flex-column alignitems-center policy-text ">
        <p className=" font-32 policy-title">{t("PolicyTitle")} </p>
        <p className="font-16 policy-text">{t("PolicyText")}</p>
      </div>
      <div id="circles-wrapper">
        <div className="container">
          <div className=" circles d-flex justify-content-between flex-wrap mx-5 px-5">
            <div className="    ">
              <div className="circle d-flex justify-content-center align-items-center">
                <div className="policy-inside mx-auto d-flex flex-column align-items-center">
                  <IoDiamondOutline size="2.5em" color="#0087FF" />
                  <p className="policy-icon-text  text-center font-lato font-16">
                    {t("PrincipleIconText1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="    ">
              <div className="circle d-flex justify-content-center align-items-center">
                <div className="policy-inside mx-auto d-flex flex-column align-items-center">
                  <FaShieldAlt size="2.5em" color="#0087FF" />
                  <p className="policy-icon-text  text-center font-lato font-16">
                    {" "}
                    {t("PrincipleIconText2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="    ">
              <div className="circle d-flex justify-content-center align-items-center">
                <div className="policy-inside mx-auto d-flex flex-column align-items-center">
                  <BiSupport size="2.5em" color="#0087FF" />
                  <p className="policy-icon-text  text-center font-lato font-16">
                    {" "}
                    {t("PrincipleIconText3")}
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="    ">
              <div className="circle d-flex justify-content-center align-items-center">
                <div className="policy-inside mx-auto d-flex flex-column align-items-center">
                  <FaMoneyBillAlt size="2.5em" color="#0087FF" />
                  <p className="policy-icon-text  text-center font-lato font-16">
                    {" "}
                    {t("PrincipleIconText4")}
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="    ">
              <div className="circle d-flex justify-content-center align-items-center">
                <div className="policy-inside mx-auto d-flex flex-column align-items-center">
                  <FaGlassCheers size="2.5em" color="#0087FF" />
                  <p className="policy-icon-text  text-center font-lato font-16">
                    {" "}
                    {t("PrincipleIconText5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
