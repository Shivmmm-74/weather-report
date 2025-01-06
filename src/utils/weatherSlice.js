import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
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
  },
});
export const { addWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
