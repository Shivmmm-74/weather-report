import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

const appStore = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

export default appStore;
