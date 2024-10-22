import "./Contact.css";

const Contact = () => {
  return (
    <section className="form-section w-full flex flex-col items-center py-10 mt-20 px-24">
      <h2 className="text-2xl font-semibold py-5">JOIN HYDRA</h2>
      <h3 className="text-2xl font-thin py-5">
        Let’s Build Your VR Experience
      </h3>
      <form className="w-full grid grid-cols-1 gap-4">
        <div className="col-span-12 flex md:flex-row flex-col justify-between gap-4">
          <input type="text" name="firstName" id="firstName" placeholder="First Name" className="form-inputs md:w-1/2 w-full" />
          <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="form-inputs md:w-1/2 w-full" />
        </div>
        <div className="col-span-12 flex md:flex-row flex-col justify-between gap-4">
          <input type="email" name="emal" id="email" placeholder="Email" className="form-inputs md:w-1/2 w-full" />
          <input type="text" name="phone" id="phone" placeholder="Phone Number" className="form-inputs md:w-1/2 w-full" />
        </div>
        <input type="text" name="subject" id="subject" placeholder="Subject" className="form-inputs col-span-12 md:w-auto w-full" />
        <textarea name="message" id="message" placeholder="Tell Us Something..." className="form-inputs col-span-12 md:w-auto w-full"></textarea>
        <div className="w-full flex items-center justify-center col-span-12">
          <button className="btn px-8 py-2 rounded-full mx-auto">SEND TO HYDRA</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
