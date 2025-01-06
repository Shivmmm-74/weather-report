import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
  return (
    <div className='w-screen'>
      <Provider store={appStore}>
        <Header />
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  );
};

export default AppLayout;
