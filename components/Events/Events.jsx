const Events = ({ img, title, text }) => {
  return (
    <div>
      <div className="events-container d-flex ">
        <div className="events-img">
          <img className="card-img-top" src={img} />
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
