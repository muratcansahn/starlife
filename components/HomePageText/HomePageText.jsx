import Image from "next/image";

const HomePageText = () => {
  return (
    <div className="text-center">
      <div className="homepage-logo">
        {" "}
        <Image
          className=" "
          src={"/images/sealife-yacht.jpg"}
          alt="Yachtlogo"
          height="210px"
          width="320px"
        />
      </div>
      <p className="homepage-text">
        Yıllar boyu süre gelen birçok imparatorluğa ev sahipliği yapmış iki
        kıtayı birbirine kavuşturan yedi tepeli İstanbul’un doğal güzelliklerini
        bizlerle birlikte deniz üzerinden Güvenli, Konforlu ve Lüks
        Motoryatlarımız ile gezmek ister misiniz? Sizlerde boğaz köprüsünün
        üstünden geçtim altından geçemedim diyenlerdenseniz! Sizleri İstanbul
        boğazının eşsiz manzarasını yaşamaya davet ediyoruz.
        <br />
        Kalmalı ya da Günübirlik turlarımızla siz değerli misafirlerimizi
        ağırlamaktan onur duyarız.
      </p>
    </div>
  );
};

export default HomePageText;
