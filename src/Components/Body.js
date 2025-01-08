import React from "react";
import TodayWeather from "./TodayWeather";
import CurrentWeather from "./CurrentWeather";

const Body = () => {
  return (
    <>
      <CurrentWeather />
      <TodayWeather />
    </>
  );
};

export default Body;
