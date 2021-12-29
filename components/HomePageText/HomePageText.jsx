import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const HomePageText = () => {
  //Localization
  const router = useRouter();
  const t = useTranslations("HomePageText");
  return (
    <div className="text-center my-4">
      <div className="homepage-logo">
        {" "}
        <Image
          className="neva-logo"
          src={"/images/neva-logo.png"}
          alt="Yachtlogo"
          height="320px"
          width="320px"
        />
      </div>
      <p className="homepage-text my-4 mx-3">
        {t("HomePageText1")}
        <br />
        {t("HomePageText2")}
      </p>
    </div>
  );
};

export default HomePageText;
