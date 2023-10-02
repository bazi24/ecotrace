import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

const App = () => (
  <main className="font-primary">
    <Navbar />
    <section className="p-4 mb-4">
      <h1 className="text-5xl z-10 font-bold">ecotrace</h1>
      <div className="-mt-3 -z-10 bg-green-400 h-3 w-[244px] "></div>
      <h2 className="text-2xl font-medium mb-3 ">
        Tracking the worlds emmisions
      </h2>
      <h3 className="text-md font-light mb-4">
        Support our goal of true transparency in carbon emmisions around the
        world. Even small Donations help us a lot!
      </h3>
      <button className="pl-6 pr-6 pt-2 pb-2 bg-green-400 text-green-700 text-lg font-bold rounded-2xl hover:rounded-full hover:bg-green-700 hover:text-green-200 transition-transform">
        Donate
      </button>
    </section>
    <section className="">
      <Table />
    </section>
    <section className="mt-4 bg-green-100">
      <Footer />
    </section>
  </main>
);
export default App;
