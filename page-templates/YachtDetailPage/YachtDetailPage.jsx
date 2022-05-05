import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import WhatsappButton from "../../components/WhatsappButton/WhatsappButton";
import Image from "next/image";
import { BoatData } from "../../utils/boats";

const YachtDetailPage = ({ images, boat, id }) => {
  const t = useTranslations("BoatSpecifications");
  const currentBoatImage = BoatData[id - 1].DetailImages;

  return (
    <div className="">
      <WhatsappButton boatname={`Yacht ${id}`} />
      <Header />

      <div className="row mx-0  boat-specifications py-4 ">
        <div className="col-md-8 container">
          <div className="row my-1 mx-3">
            {currentBoatImage.map((i) => {
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
