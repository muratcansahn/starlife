import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { LangSwitcher, servicesSubMenuItems } from ".";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Header = () => {
  //Localization
  const router = useRouter();
  const t = useTranslations("Header");

  // States
  const [state, setState] = useState(true);
  const toogle = () => {
    setState(!state);
  };

  useEffect(() => {
    !state;
  }, []);

  // Functions
  const onChangeLanguage = (lang) => (e) => {
    e.preventDefault();

    return router.push(router.pathname, {}, { locale: lang });
  };
  return (
    <div className="main-navbar d-flex justify-content-between ">
      <div className="">
        <div className="logo mr-2">
          <Link href="/">
            <a className="text-active d-flex mx-1 align-items-end left-menu">
              {" "}
              <Image src="/images/logo-main.jpg" width={70} height={60} />
              <p className="brand">Neva Yat Kiralama</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="d-flex right-menu mt-2">
        <ul className=" menu align-items-center  justify-content-around   mt-2 font-weight-bold mx-3">
          <li>
            <Link href="/">
              <a className="text-active mx-4">{t("homepage")}</a>
            </Link>
          </li>
          <li className="dropdown">
            <div>
              <Link href="/hizmetlerimiz">
                <strong> {t("services")}</strong>
              </Link>

              <div className="dropdown-content pt-3 ">
                {servicesSubMenuItems.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <a>{t(`${item.title}`)}</a>
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link href="/hakkimizda">
              <a className=" mx-4">{t("aboutUs")}</a>
            </Link>
          </li>
          <li>
            <Link href="/iletisim">
              <a className=" mx-4">{t("contact")}</a>
            </Link>
          </li>
          <LangSwitcher onChangeLanguage={onChangeLanguage} />
        </ul>
        <div className="mobile-lang-switcher mt-2">
          <LangSwitcher onChangeLanguage={onChangeLanguage} />
        </div>
        <span className="mx-4 tooglebtn" onClick={toogle}>
          &#9776;
        </span>{" "}
      </div>
      <MobileNavbar
        className="mobile-navbar"
        sidenav={` sidenav ${state ? "left-100" : "left-0"} pt-2`}
        closeBtn={toogle}
        ul={
          <ul>
            <li>
              {" "}
              <Link href="/">
                <a className="text-active mx-4">{t("homepage")}</a>
              </Link>
            </li>
            <li className="dropdown">
              <div className="services ">
                <Link href="/hizmetlerimiz">
                  <strong> {t("services")}</strong>
                </Link>
                <div className=" pt-3 services-submenu">
                  {servicesSubMenuItems.map((item) => (
                    <Link key={item.title} href={item.href}>
                      <a>{t(`${item.title}`)}</a>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href="/hakkimizda">
                <a className=" mx-4">{t("aboutUs")}</a>
              </Link>
            </li>
            <li>
              <Link href="/iletisim">
                <a className=" mx-4">{t("contact")}</a>
              </Link>
            </li>
          </ul>
        }
      />
    </div>
  );
};
export default Header;
