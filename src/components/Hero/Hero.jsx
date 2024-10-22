import "./Hero.css";
import { heroContactOpts } from "../../utils/Constants";
import ContactOpts from "./ContactOpts";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="pb-24 flex md:flex-row flex-col-reverse justify-between">
        <div className="hero-right md:w-1/3 py-8 flex flex-col md:items-start items-center justify-around">
          <h1 className="md:text-start text-center">
            <span className="highlight-text">Dive</span> Into The Depths Of{" "}
            <span className="highlight-text">Virtual Reality</span>
          </h1>
          <p className="py-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>

          <span className="btn rounded-3xl px-5 py-1">BUILD YOUR WORLD</span>
        </div>

        <div className="hero-left flex items-center justify-center">
          <div className="hero-img">
            <img src="/Images/model-1.jpg" alt="Hero Image" />
          </div>
        </div>
      </div>

      <div className="hero-contact-opts rounded-full flex items-center justify-around">
        {heroContactOpts.map((opt, idx)=>{
            return(
                <ContactOpts key={idx} opt={opt} />
            ) 
        })}
      </div>
    </section>
  );
};

export default Hero;
