import { BiAnchor } from "react-icons/bi";

const Features = () => {
  return (
    <div>
      <div className="row features-row ">
        <div className="col box box-1 text-center">
          <BiAnchor size="60px" color="#666" />
          <p className="box-title my-3">Eşsiz bir Deneyim</p>
          <p className="box-text my-3">
            Yatlarımız ile yaşayacağınız bu eşsiz deneyimde denizin göz alıcı
            maviliklerinde özgürlüğün tadını çıkarabilirsiniz.
          </p>
        </div>
        <div className="col">2</div>
        <div className="col">3</div>{" "}
      </div>
    </div>
  );
};

export default Features;
