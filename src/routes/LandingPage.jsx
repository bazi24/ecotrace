import Table from "../components/Table";
import img from "../assets/img.svg";
import { FaAnglesDown } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";

const LandingPage = () => {
  return (
    <>
      <div className="h-[100vh]">
        <div className="inline-block p-3 text-sm md:text-md relative md:ml-20 mt-[84px] md:top-[50%] md:-mt-[300px]  text-green-800 z-10 ">
          <h1 className="text-6xl z-10 font-black lg:text-9xl">ecotrace</h1>
          <div className="-mt-4 lg:-mt-8 -z-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg h-3 lg:h-5 w-[292px] lg:w-[590px]"></div>

          <h2 className="text-2xl lg:text-[33px] font-bold mt-2 uppercase">
            Tracking the worlds emissions
          </h2>
          <h3 className="text-md lg:text-xl font-medium mb-4 mt-4">
            Support our goal of true transparency of carbon emissions around the
            globe.
            <p>
              Let us save the planet together! Even small Donations as low as 5$
              help a lot!
            </p>
            <p>
              {" "}
              Want so see how your Donations are used? Click{" "}
              <a className="underline" href="#">
                here
              </a>{" "}
              to find out!
            </p>
          </h3>
          <button
            onClick={() => alert("Danke!")}
            className="pl-10 pr-10 pt-3 pb-3 absolute bg-gradient-to-r from-green-400 to-green-500 text-green-800 text-lg font-bold rounded-2xl hover:border-2 border-green-100 hover:text-green-100 transition-colors"
          >
            <BiDonateHeart className="inline-flex w-6 h-6 mr-2 -mt-1" />
            Donate
          </button>
        </div>
        <div className="hidden md:inline-flex w-[50%] z-1">
          <img
            src={img}
            className="h-[1000px] absolute right-20 top-[50%] z-1 -mt-[500px] opacity-70"
          />
        </div>
        <div className="absolute text-center left-[50%] drop-shadow-md -ml-[160px] w-[320px] bottom-[20px] text-green-50 text-2xl uppercase font-bold">
          <p>the 100 dirtiest </p>
          <p>countries & Companies</p>

          <FaAnglesDown className="inline-block bounce h-10 w-10 realtive ml-5 mt-8 left-[50%] " />
        </div>
      </div>
      <div className="place-content-center flex">
        <Table />
      </div>
    </>
  );
};

export default LandingPage;
