import { IoBoatOutline } from "react-icons/io5";

const PageLogo = ({ pagename }) => {
  return (
    <div className=" d-flex flex-column align-items-center justify-content-center py-4 ">
      {" "}
      <h1 className="text-center">{pagename}</h1>
      <IoBoatOutline size="50px" className="page-logo " />
      <hr className="underline-top my-4" />
    </div>
  );
};

export default PageLogo;
