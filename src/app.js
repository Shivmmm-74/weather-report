import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import AppLayout from "./Components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Hourly from "./Components/Hourly";
import Daily from "./Components/Daily";
import AirQuality from "./Components/AirQuality";
import Health from "./Components/Health";
import ErrorPage from "./Components/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/hourly",
        element: <Hourly />,
      },
      {
        path: "/daily",
        element: <Daily />,
      },
      {
        path: "/airquality",
        element: <AirQuality />,
      },

      {
        path: "/health",
        element: <Health />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
