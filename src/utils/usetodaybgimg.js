const useTodayBgImg = ({ weatherCondition }) => {
  if (
    weatherCondition.includes("rainy") ||
    weatherCondition.includes("raining")
  ) {
    return require("../assets/rainy_day.jpg");
  }
  if (
    weatherCondition.includes("thunderstorm") ||
    weatherCondition.includes("thunder")
  ) {
    return require("../assets/thunderstorm.jpeg");
  }
  if (weatherCondition.includes("storm")) {
    return require("../assets/thunderstorm.jpeg");
  }
  if (weatherCondition.includes("partly")) {
    return require("../assets/partlyday.jpeg");
  }
  if (weatherCondition.includes("mist")) {
    return require("../assets/mistday.jpeg");
  }
  if (weatherCondition.includes("fogg") || weatherCondition.includes("foggy")) {
    return require("../assets/foggday.jpeg");
  }
  if (
    weatherCondition.includes("cloud") ||
    weatherCondition.includes("cloudy")
  ) {
    return require("../assets/clodyday.jpeg");
  }
  if (
    weatherCondition.includes("clear") ||
    weatherCondition.includes("sunny")
  ) {
    return require("../assets/sunny.jpg");
  }
  // Default background based on is_day
  return require("../assets/day.jpg");
};
export default useTodayBgImg;
