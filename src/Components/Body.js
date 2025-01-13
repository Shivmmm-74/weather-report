import React from "react";
import TodayWeather from "./TodayWeather";
import CurrentWeather from "./CurrentWeather";
import AstroCard from "./AstroCard";

const Body = () => {
  return (
    <div>
      <CurrentWeather />
      <TodayWeather />
      <AstroCard />
    </div>
  );
};

export default Body;
