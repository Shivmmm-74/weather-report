import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className='w-full bg-emerald-50'>
      <Provider store={appStore}>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </div>
  );
};

export default AppLayout;
