import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import img from "./assets/img.svg";
import { FaAnglesDown } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";

const App = () => (
  <main className="font-primary bg-gradient-to-b from-green-200 to-green-600">
    <Navbar />
    <section className="p-4 mt-8 h-[100vh] md:ml-20">
      <div className="inline-block relative top-[50%] -mt-[300px] h-[320px] text-green-800 z-20 ">
        <h1 className="text-6xl z-10 font-black lg:text-9xl">ecotrace</h1>
        <div className="-mt-4 lg:-mt-8 -z-10 bg-gradient-to-r from-green-400 to-green-600 rounded-lg h-3 lg:h-5 w-[292px] lg:w-[590px]"></div>
        <h2 className="text-2xl lg:text-[33px] font-bold mt-2 uppercase">
          Tracking the worlds emissions
        </h2>
        <h3 className="text-md lg:text-xl font-medium mb-4 mt-4">
          Support our goal of true transparency in carbon emissions around the
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
        <button className="pl-10 pr-10 pt-3 pb-3 bg-gradient-to-r absolute from-green-400 to-green-600 text-green-800 text-lg font-bold rounded-2xl hover:border-2 border-green-100 hover:text-green-100 transition-colors">
          <BiDonateHeart className="inline-flex w-6 h-6 mr-2 -mt-1" />
          Donate
        </button>
      </div>
      <div className="hidden md:inline-flex w-[50%]">
        <img
          src={img}
          className="h-[1000px] absolute right-20 top-[50%] -mt-[500px] opacity-70"
        />
      </div>
      <div className="absolute text-center left-[50%] -ml-[200px] w-[400px] bottom-[40px] text-green-100 text-2xl uppercase font-bold">
        <p>the 100 dirtiest </p>
        <p>countries & Companies</p>

        <FaAnglesDown className="inline-block bounce h-10 w-10 realtive ml-5 mt-8 left-[50%] " />
      </div>
    </section>
    <section className="place-content-center flex">
      <Table />
    </section>
    <section className="mt-4 ">
      <Footer />
    </section>
  </main>
);
export default App;
