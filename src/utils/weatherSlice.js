import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    originweather: null,
    originlocation: null,
    currentWeather: null,
    weatherForecast: null,
    location: null,
  },
  reducers: {
    addWeather: (state, action) => {
      const { current, forecast, location } = action.payload;
      state.currentWeather = current;
      state.weatherForecast = forecast;
      state.location = location;
    },
    addoriginWeather: (state, action) => {
      const { currentWeather, currentLocation } = action.payload;
      state.originweather = currentWeather;
      state.originlocation = currentLocation;
    },
  },
});
export const { addWeather, addoriginWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
