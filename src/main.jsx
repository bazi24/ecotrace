import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import "./index.css";
import Contact from "./routes/Contact";
import LandingPage from "./routes/LandingPage.jsx";
import Vision from "./routes/Vision.jsx";
import Team from "./routes/Team.jsx";
import Member from "./routes/Member.jsx";
import Donations from "./routes/Donations.jsx";
import Sponsors from "./routes/Sponsors.jsx";
import Agenda from "./routes/Agenda.jsx";
import Datenschutz from "./routes/Datenschutz.jsx";
import Impressum from "./routes/Impressum.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/vision",
        element: <Vision />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/member",
        element: <Member />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/sponsors",
        element: <Sponsors />,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/datenschutz",
        element: <Datenschutz />,
      },
      {
        path: "/impressum",
        element: <Impressum />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
