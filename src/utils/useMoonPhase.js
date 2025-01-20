const useMoonPhase = ({ moonphase }) => {
  if (moonphase.includes("Full Moon")) {
    return require("../assets/moon/full_moon.jpg");
  }
  if (moonphase.includes("First")) {
    return require("../assets/moon/first_quarter.jpg");
  }
  if (moonphase.includes("Third" || "Last")) {
    return require("../assets/moon/third_quarter_moon.jpg");
  }
  if (moonphase.includes("Last")) {
    return require("../assets/moon/third_quarter_moon.jpg");
  }
  if (moonphase.includes("New")) {
    return require("../assets/moon/newmoon.jpg");
  }
  if (moonphase.includes("Waxing Crescent")) {
    return require("../assets/moon/waxing_gibbus_moon.jpg");
  }
  if (moonphase.includes("Waxing Gibbous")) {
    return require("../assets/moon/waxing_gibbus_moon.jpg");
  }
  if (moonphase.includes("Waning Gibbous")) {
    return require("../assets/moon/wannin_gibbus_moon.jpg");
  }
  if (moonphase.includes("Waning Crescent")) {
    return require("../assets/moon/wanning_cresent_moon.jpg");
  }
};
export default useMoonPhase;
