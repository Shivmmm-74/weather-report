import React from "react";
import { useDispatch } from "react-redux";
import { addoriginWeather, addWeather } from "./weatherSlice";
import { useState, useEffect } from "react";

const useWeatheApi = () => {
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("geolocation not supported by this browser");
    }
  };
  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherReport();
    }
  }, [latitude, longitude]);

  const fetchWeatherReport = async () => {
    const data = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8e198c24f8ba4748918110754250501&q=jamshedpur&days=3&aqi=yes&alerts=no`
    );
    const json = await data.json();
    const current = json.current;
    const loaction = json.location;
    const forecast = json.forecast;
    console.log(json);
    dispatch(
      addoriginWeather({ currentWeather: current, currentLocation: loaction })
    );
    dispatch(
      addWeather({ current: current, location: loaction, forecast: forecast })
    );
  };
};

export default useWeatheApi;
