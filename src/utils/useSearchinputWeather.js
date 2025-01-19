import React from "react";
import { useDispatch } from "react-redux";
import { addoriginWeather, addWeather } from "./weatherSlice";
import { useEffect } from "react";

const useSearchinputWeather = (input) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!input) return;
    else {
      fetchWeatherReport();
    }
  }, [input]);

  const fetchWeatherReport = async () => {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8e198c24f8ba4748918110754250501&q=${input}&days=3&aqi=yes&alerts=no`
    );
    const json = await data.json();
    const current = json.current;
    const loaction = json.location;
    const forecast = json.forecast;
    // console.log(json);
    dispatch(
      addWeather({ current: current, location: loaction, forecast: forecast })
    );
  };
};

export default useSearchinputWeather;
