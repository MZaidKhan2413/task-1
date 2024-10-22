import "./About.css";

const About = () => {
  return (
    <section>
      <div className="flex items-center md:justify-around justify-center">
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-semibold text-center md:text-start pb-3">INTRODUCTION</h2>
          <h3 className="text-3xl font-thin text-center md:text-start">TO HYDRA VR</h3>
        </div>
        <p className="w-1/2 text-justify md:block hidden">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae
        </p>
      </div>

      <div className="about-info py-20 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="abt-right px-5">
          <div className="about-img">
            <img src="/Images/model-2.jpg" alt="about img" />
          </div>
        </div>

        <div className="abt-left w-full md:w-1/2 ">
          <div className="pb-2 py-5 md:block hidden">
            <h2 className="text-3xl font-semibold">ABOUT</h2>
            <h3 className="text-3xl font-thin">HYDRA VR</h3>
          </div>
          <p className="py-5 pb-10">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>

          <span className="btn text-sm rounded-full px-6 py-2">LET'S GET IN TOUCH</span>
        </div>
      </div>
    </section>
  );
};

export default About;
