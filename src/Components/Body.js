import React, { useEffect, useState } from "react";

const Body = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [weather, setWeather] = useState();
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
      `https://api.weatherapi.com/v1/forecast.json?key=8e198c24f8ba4748918110754250501&q=dehradun&days=3&aqi=yes&alerts=no`
    );
    const json = await data.json();
    console.log(json);
    setWeather(json.location.name);
  };
  if (!weather) return <h1>loading</h1>;
  return (
    <div>
      <h1>latidute is{latitude}</h1>
      <h1>longitude is{longitude}</h1>
      <h1> yourt city is {weather}</h1>

      <img
        src='//cdn.weatherapi.com/weather/64x64/day/113.png'
        alt='Weather data by WeatherAPI.com'
        border='0'
      />
    </div>
  );
};

export default Body;
