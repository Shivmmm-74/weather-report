const generateTodayWeatherMessage = ({
  temp,
  humidity,
  cloud,
  aqi,
  condition,
}) => {
  let message = "";

  // Temperature-based prediction
  if (temp > 35) {
    message +=
      "Expect extremely hot conditions today with temperatures soaring above 35°C. Stay indoors during the afternoon, and keep yourself hydrated. ";
  } else if (temp > 30) {
    message +=
      "The day will be warm with highs around 30°C. A great day for outdoor activities, but don’t forget to stay cool and drink plenty of water. ";
  } else if (temp > 20) {
    message +=
      "Today brings pleasant temperatures in the range of 20–30°C. Perfect for spending time outdoors and enjoying the weather. ";
  } else if (temp > 10) {
    message +=
      "The weather will be slightly chilly with temperatures hovering around 10–20°C. A light jacket is recommended if you're heading out. ";
  } else {
    message +=
      "Cold conditions are expected today, with temperatures dropping below 10°C. Bundle up warmly and consider staying indoors to keep cozy. ";
  }

  // Humidity-based prediction
  if (humidity > 80) {
    message +=
      "High humidity levels above 80% will make it feel warmer and sticky today. Consider wearing lightweight, breathable clothing. ";
  } else if (humidity > 60) {
    message +=
      "Moderate humidity levels of around 60–80% will create a slightly muggy atmosphere. It's manageable, but stay hydrated. ";
  } else if (humidity > 40) {
    message +=
      "Humidity levels are comfortable today, making the air feel fresh and pleasant. ";
  } else {
    message +=
      "Low humidity below 40% might make the air feel dry. If you’re prone to dry skin or respiratory issues, consider using a moisturizer or humidifier. ";
  }

  // Cloud-based prediction
  if (cloud > 70) {
    message +=
      "The sky will remain overcast for most of the day, blocking out much of the sunlight. It’s a good day to stay indoors or enjoy the cool outdoors. ";
  } else if (cloud > 50) {
    message +=
      "Partly cloudy skies are expected today, with some sunlight breaking through occasionally. A mix of shade and shine awaits you. ";
  } else {
    message +=
      "The sky will be mostly clear today, offering plenty of sunshine. A great day to wear sunglasses and enjoy outdoor activities! ";
  }

  // AQI-based prediction
  if (aqi <= 2) {
    message +=
      "Air quality is excellent today, making it a perfect day for outdoor activities. Breathe freely and enjoy the fresh air! ";
  } else if (aqi <= 3) {
    message +=
      "Air quality is good, with minimal pollutants in the air. Ideal for a morning jog or an evening walk. ";
  } else if (aqi <= 4) {
    message +=
      "Air quality is moderate, with some pollutants present. Sensitive groups should limit prolonged outdoor exposure. ";
  } else if (aqi <= 5) {
    message +=
      "Air quality is poor today. If you have respiratory issues or are part of a sensitive group, avoid outdoor activities and keep your windows closed. ";
  } else {
    message +=
      "Air quality is very unhealthy. Everyone is advised to stay indoors and use air purifiers if available. Avoid outdoor exposure at all costs. ";
  }

  // Weather condition-based prediction
  if (condition.includes("rain")) {
    message +=
      "Rain is expected throughout the day. Carry an umbrella or raincoat if you’re stepping out, and watch out for slippery roads. ";
  } else if (condition.includes("snow")) {
    message +=
      "Snowfall is likely today, creating a beautiful wintery scene. If you're heading out, wear warm clothes and be cautious of icy surfaces. ";
  } else if (condition.includes("clear")) {
    message +=
      "The weather will remain clear and sunny, offering the perfect conditions for outdoor adventures. Don’t forget sunscreen! ";
  } else if (condition.includes("storm")) {
    message +=
      "A storm is on the horizon, bringing high winds and possibly heavy rain. Stay indoors and keep your devices charged in case of power outages. ";
  } else if (condition.includes("fog")) {
    message +=
      "Foggy conditions are expected, especially in the morning. Drive carefully and use your fog lights if you're on the road. ";
  }

  return message.trim();
};

export default generateTodayWeatherMessage;
