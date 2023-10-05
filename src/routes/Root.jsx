import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";
import NavbarLTR from "../components/NavbarLTR";
import NavbarRTL from "../components/NavbarRTL";
import axios from "axios";
import rtlCountries from "../data/rtl-countries.json";

const Root = () => {
  const [message, setMessage] = useState("");
  const [culture, setCulture] = useState("ltr");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCountry);
    } else {
      setMessage("Geolocation is not supported by this browser.");
    }
  };
  getLocation();

  function getCountry(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const config = {
      method: "get",
      url:
        "https://api.geoapify.com/v1/geocode/reverse?lat=" +
        lat +
        "&lon=" +
        lon +
        "&apiKey=9ab890d4bb594743b3182a66ce5e2979",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        // Prüfen, ob der Nutzer in einem Land sitzt, in dem von rechts nach links gelesen wird
        if (rtlCountries.includes(response.data.features[0].properties.country))
          setCulture("rtl");
        // wenn ja dann wird der state von culture auf RTL right to left gesetzt
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <main className="font-primary bg-gradient-to-b from-green-100 to-green-200">
      {/* Abhängig von der Kultur des Besuchers werden zwei unterschiedliche Navbars geladen */}
      {culture === "ltr" ? <NavbarLTR /> : <NavbarRTL />}
      <section className="pt-8">
        {message}
        <Outlet />
      </section>
      <section className="mt-4 ">
        <Footer />
      </section>
    </main>
  );
};
export default Root;
