import Image from "next/image";

const Events = ({ img, title, text }) => {
  return (
    <div>
      <div className="events-container d-flex ">
        <div className="events-img">
          <Image
            className=" "
            src={img}
            alt="Yachtlogo"
            height="210px"
            width="350px"
          />
        </div>
        <div className="events-textbox p-4">
          <div className="events-title font-montserrat">{title}</div>
          <div className="events-text font-16 font-montserrat  ">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Events;
