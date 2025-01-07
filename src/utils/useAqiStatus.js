const useAQIStatus = (aqi) => {
  if (aqi >= 0 && aqi <= 50) {
    return { color: "text-green-400", text: "Good" };
  } else if (aqi >= 51 && aqi <= 100) {
    return { color: "text-yellow-200", text: "Moderate" };
  } else if (aqi >= 101 && aqi <= 150) {
    return { color: "text-yellow-500", text: "Unhealthy for Sensitive Groups" };
  } else if (aqi >= 151 && aqi <= 200) {
    return { color: "text-red-200 ", text: "Unhealthy" };
  } else if (aqi >= 201 && aqi <= 300) {
    return { color: "text-red-400", text: "Very Unhealthy" };
  } else if (aqi >= 301 && aqi <= 500) {
    return { color: "text-red-600", text: "Hazardous" };
  } else {
    return "Unknown";
  }
};
export default useAQIStatus;
