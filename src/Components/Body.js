import React from "react";
import TodayWeather from "./TodayWeather";
import CurrentWeather from "./CurrentWeather";
import AstroCard from "./AstroCard";
import HourlyCard from "./HourlyCard";

const Body = () => {
  return (
    <div>
      <CurrentWeather />
      <TodayWeather />
      <AstroCard />
      <HourlyCard />
    </div>
  );
};

export default Body;
