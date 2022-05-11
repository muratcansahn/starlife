import Image from "next/image";

const ComponentHeader = ({ title, text }) => {
  return (
    <div className=" d-flex flex-column align-items-center justify-content-center component-header ">
      <Image
        src={ComponentHeaderImage}
        className=""
        alt="component-header-image"
        width="100"
        height="50"
      />
      <p className="component-header-title font-montserrat">{title}</p>
      <p className="component-header-text font-16 font-lato ">{text}</p>
    </div>
  );
};

export default ComponentHeader;
