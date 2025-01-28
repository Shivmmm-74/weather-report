import React from "react";
import TodayWeather from "./TodayWeather";
import CurrentWeather from "./CurrentWeather";
import AstroCard from "./AstroCard";
import HourlyCard from "./HourlyCard";
import { Fade } from "react-awesome-reveal";

const Body = () => {
  return (
    <div className='bg-emerald-50'>
      <Fade
        cascade
        damping={0.2}
        delay={200}
        fraction={0.5} // Trigger when 50% visible
        triggerOnce
      >
        <CurrentWeather />
        <TodayWeather />
        <AstroCard />
        <HourlyCard />
      </Fade>
    </div>
  );
};

export default Body;
