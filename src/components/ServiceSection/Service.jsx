import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "../../utils/Constants";

const Service = () => {
  return (
    <section>
      <div className="flex items-center md:justify-around justify-center">
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-semibold text-center md:text-start pb-3">
            WHY BUILD
          </h2>
          <h3 className="text-3xl font-thin text-center md:text-start">
            WITH HYDRA?
          </h3>
        </div>
        <p className="w-1/2 text-justify md:block hidden">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center gap-5 py-20">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
