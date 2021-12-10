import { useTranslations } from "next-intl";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import PageLogo from "../../components/PageLogo/PageLogo";
import WhatsappButton from "../../components/WhatsappButton/WhatsappButton";
import Container from "../../components/Container";
import Image from "next/image";

const YachtDetailPage = ({ images, boat }) => {
  const t = useTranslations("BoatSpecifications");

  return (
    <div className="">
      <Container>
        <WhatsappButton boatname={boat.Name} /> <Contact />
        <Header />
      </Container>
      <div className="margin-top">
        {" "}
        <PageLogo pagename={boat.Name} />
      </div>

      <div className="row mx-0  boat-specifications py-4 ">
        <div className="col-md-4 ">
          <div className="mx-4">
            <div className="text-dark">
              <h2 className=" mb-4 text-center">{t("BoatSpecifications")}</h2>
              <table
                className="table table-striped"
                cellpadding="0"
                cellspacing="0"
              >
                <tbody className="text-dark">
                  <tr>
                    <td className="font-italic"> {t("BoatType")}</td>
                    <td>{t("Motoryacht")}</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("Length")}:</td>
                    <td>23 {t("Meter")}</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("Width")}:</td>
                    <td>6 {t("Meter")}</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("NumberofCabin")}:</td>
                    <td>3</td>
                  </tr>

                  <tr>
                    <td className="font-italic">{t("PassengerCapacity")}:</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("Crew")}:</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td className="font-italic">{t("Speed")}:</td>
                    <td>20 Kn/{t("Hour")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-8 container">
          <div className="row my-1 mx-3">
            {images.map((i) => {
              return (
                <div className="col-md-3 col-12 mb-4 my-3 px-1">
                  <a href={i} data-fancybox="gallery" data-caption="">
                    <Image
                      src={i}
                      className="card-image "
                      alt=""
                      height={170}
                      width={330}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YachtDetailPage;
