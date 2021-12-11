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
        Starlife Yat Kiralama olarak kendimize en iyi hizmet kalitesi,güler
        yüzlü servis ve müşteri memnuniyeti ilkelerini benimsemiş olup lüks ve
        ferah yatlarımız ile bunun için çalışmaktayız. Sizlerde
        kapasite,renk,model gibi farklı özelliklere sahip yatlarımızdan
        kendinize uygun olanı seçip özel günlerinizi unutulmaz bir deneyim ile
        taçlandırıp,güzel anılarınıza bir yenisini daha ekleyebilirsiniz.
        <br />
        Kalmalı ya da Günübirlik turlarımızla siz değerli misafirlerimizi
        ağırlamakdan onur duyarız.
      </p>
    </div>
  );
};

export default HomePageText;
