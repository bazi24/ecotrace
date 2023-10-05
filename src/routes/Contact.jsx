const Contact = () => (
  <div className="w-[100%] text-green-800">
    <div className="w-[90%] ml-[5%] lg:w-[40%] lg:ml-[30%]">
      <h1 className="lg:text-8xl text-4xl block uppercase font-black ">
        contact
      </h1>
      <div className="-mt-4 lg:-mt-6 -z-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg h-3 lg:h-5 w-[70%]"></div>
      <form className="font-bold">
        <select className="select select-bordered w-full max-w-xs mt-20">
          <option disabled selected>
            Why are you writing us?
          </option>
          <option>Because you are awesome!</option>
          <option>Other reason</option>
        </select>
        <div className="form-control w-full max-w-xs mt-8">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="Type in your first name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-8">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Type in your last name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-8">
          <label className="label">
            <span className="label-text">Mail Adress</span>
          </label>
          <input
            type="text"
            placeholder="Type in your email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control mt-8">
          <label className="label">
            <span className="label-text">Your message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-[240px] "
            placeholder="Enter your message here"
          ></textarea>
        </div>
        <div className="form-control mt-8">
          <label className="label cursor-pointer place-content-start">
            <span className="label-text">
              I agree to the terms and conditions of datasecurity of ecotrace.
            </span>
            <input type="checkbox" className="checkbox ml-3" />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer place-content-start">
            <span className="label-text">
              I want ecotrace to contact me on other matters.
            </span>
            <input type="checkbox" className="checkbox ml-3" />
          </label>
        </div>
        <button className="btn mt-8 mb-20">Submit</button>
      </form>
    </div>
  </div>
);

export default Contact;
