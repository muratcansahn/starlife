import { BiAnchor } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
const Features = () => {
  return (
    <div>
      <div
        className=" row features-row  d-flex
      "
      >
        <div className=" box box-1 text-center col-lg-4 col-md-12 ">
          <div className="box-icon">
            {" "}
            <BiAnchor size="60px" color="#FFFFF" />
          </div>
          <div className="textbox ">
            <p className="box-title my-3">Eşsiz bir Deneyim</p>
            <p className="box-text my-3">
              Yatlarımız ile yaşayacağınız bu eşsiz deneyimde denizin göz alıcı
              maviliklerinde özgürlüğün tadını çıkarabilirsiniz.
            </p>
          </div>
        </div>
        <div className=" box box-1 text-center col-lg-4 col-md-12  ">
          <div className="box-icon">
            {" "}
            <GiPartyPopper size="60px" color="#FFFFF" />
          </div>
          <div className="textbox">
            <p className="box-title my-3">Özel Etkinlikler</p>
            <p className="box-text my-3">
              Evlilik teklifi,Doğum günü,Bekarlığa veda ,Akşam
              Yemeği,Düğün,Nişan ,Boğaz turu fırsatları{" "}
            </p>
          </div>
        </div>
        <div className=" box box-1 text-center col-lg-4 col-md-12  ">
          <div className="box-icon">
            {" "}
            <FaUsers size="60px" color="#FFFFF" />
          </div>
          <div className="textbox">
            <p className="box-title my-3">Güler Yüzlü Hizmet </p>
            <p className="box-text my-3">
              Siz değerli misafirlerimizin kaliteli ve konforlu zaman geçirmesi
              için daima hizmetinizdeyiz.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
