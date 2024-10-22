import "./ServiceCard.css";

const ServiceCard = ({service}) => {
  return (
    <div className="card p-5 flex flex-col items-center justify-around">
      <div className="card-img">
        <img src={service.image} alt="temp" />
      </div>
      <h3 className="text-xl font-bold">{service.heading}</h3>

      <p>
        Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor
        rhoncus libero justo laoreet sit amet vitae
      </p>

      <span className="btn px-8 py-3 text-xs rounded-full">Try it now</span>
    </div>
    
  );
};

export default ServiceCard;
