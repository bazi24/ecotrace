import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => (
  <main className="font-primary bg-gradient-to-b from-green-200 to-green-600">
    <Navbar />
    <section className="p-4 mt-8">
      <Outlet />
    </section>
    <section className="mt-4 ">
      <Footer />
    </section>
  </main>
);
export default Root;
