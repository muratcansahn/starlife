import { BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { CloseButton } from "react-bootstrap";

const MobileNavbar = ({ ul, sidenav, closeBtn }) => {
  return (
    <div id="mySidenav" className={sidenav}>
      <CloseButton onClick={closeBtn} className="float-end mx-3" />
      <ul className="my-4">{ul}</ul>
      <div className="sidebar-bottom">
        <hr />
        <div className="icons mx-3 d-flex ">
          <div className="facebook-icon mx-4">
            <Link href="https://www.instagram.com/sealife_yatkiralama/">
              <a className="">
                <BsInstagram size="24px" color="black" />
              </a>
            </Link>
          </div>
          <div className="instagram-icon mx-3">
            <Link href="https://www.facebook.com/Sealifeyat%C3%A7%C4%B1l%C4%B1k-625043754630767/">
              <a className="">
                <BsFacebook size="24px" color="black" />
              </a>
            </Link>
          </div>
          <div className="youtube-icon mx-3">
            <BsYoutube size="24px" color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
