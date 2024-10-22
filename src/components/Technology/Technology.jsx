import "./Technology.css"

const Technology = () => {
  return (
    <section className="flex flex-col items-center w-full">
        <div className="tech-img flex items-center justify-center rounded-full relative">
          <div className="overlay absolute flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-center">TECHNOLOGY & HARDWARE</h2>
            <h3 className="text-2xl font-thin text-center">USED BY HYDRA VR.</h3>
          </div>
          <img src="/Images/tech.jpg" alt="" />
        </div>

        <div className="w-full tech-logos grid md:grid-cols-4 grid-cols-2 pt-20 gap-4">
          <img src="/Images/logo-1.png" alt="temp" className="tech-logo-img" />
          <img src="/Images/logo-2.png" alt="temp" className="tech-logo-img" />
          <img src="/Images/logo-3.png" alt="temp" className="tech-logo-img" />
          <img src="/Images/logo-4.png" alt="temp" className="tech-logo-img" />
        </div>
    </section>
  ) 
}

export default Technology