import React from "react";
import { useSelector } from "react-redux";
import HourlySlider from "./HourlySlider";

const Hourly = () => {
  const weatherData = useSelector(
    (store) => store.weather.weatherForecast.forecastday
  );
  console.log(weatherData);
  return (
    <div className='flex flex-col'>
      {weatherData.map((weather, index) => (
        <div key={weather.date_epoch}>
          <HourlySlider
            hour={weather.hour}
            date={weather.date}
            day={
              index === 0
                ? "Today"
                : index === 1
                ? "Tomorrow"
                : "Day After Tomorrow"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Hourly;
