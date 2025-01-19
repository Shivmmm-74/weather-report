import React from "react";
import { useSelector } from "react-redux";
import AirQualityChart from "./AIirDetail";

const AirQuality = () => {
  const air_quality = useSelector(
    (store) => store?.weather?.currentWeather?.air_quality
  );
  if (!air_quality) return;
  return (
    <div>
      <AirQualityChart airQualityData={air_quality} />
    </div>
  );
};

export default AirQuality;
