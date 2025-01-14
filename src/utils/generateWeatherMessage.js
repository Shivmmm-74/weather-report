const generateWeatherMessage = (current) => {
  if (!current) return "";
  const {
    temp_c = 0,
    is_day = 1,
    wind_kph = 0,
    wind_dir = "N",
    humidity = 0,
    cloud = 0, // Cloud cover percentage
    condition = { text: "" },
  } = current;
  const conditionText = condition.text.toLowerCase();

  let message = "";

  // Temperature-based message
  if (temp_c > 35) {
    message += is_day
      ? "It's extremely hot! Stay indoors and keep yourself hydrated. "
      : "It's a warm night. Consider keeping the windows open for ventilation. ";
  } else if (temp_c > 30) {
    message += is_day
      ? "It's a hot day! Drink plenty of water and avoid strenuous activities. "
      : "It's a warm and clear night. Perfect for stargazing! ";
  } else if (temp_c < 10) {
    message += is_day
      ? "It's quite cold outside. Dress warmly and stay cozy. "
      : "It's a cold night. Keep warm indoors and enjoy a hot beverage. ";
  } else {
    message += is_day
      ? "The temperature is comfortable. Enjoy the pleasant weather! "
      : "It's a cool and calm night. Great for a peaceful evening stroll. ";
  }

  // Weather condition-based message
  if (conditionText.includes("rain")) {
    message += is_day
      ? "It might rain today. Carry an umbrella just in case. "
      : "Rain is expected tonight. Stay dry and cozy indoors. ";
  } else if (conditionText.includes("clear")) {
    message += is_day
      ? "The sky is clear. A perfect day for outdoor activities! "
      : "The sky is clear tonight. You might catch a glimpse of the stars! ";
  } else if (conditionText.includes("cloudy")) {
    message += is_day
      ? "It's a cloudy day. It might feel cooler than usual. "
      : "Cloudy skies tonight may block your view of the stars. ";
  }

  // Cloud-based message
  if (cloud > 75) {
    message += is_day
      ? "The sky is mostly overcast, which might make the day feel gloomy. "
      : "The night is heavily clouded, obscuring the stars and moon. ";
  } else if (cloud > 40) {
    message += is_day
      ? "There are moderate clouds, but the sun may peek through occasionally. "
      : "Partly cloudy skies tonight with glimpses of the stars. ";
  } else if (cloud > 0) {
    message += is_day
      ? "There are a few clouds in the sky, adding some charm to the day. "
      : "A few clouds tonight enhance the moonlit ambiance. ";
  }

  // Wind-based message
  if (wind_kph > 30) {
    message += `It's quite windy with winds blowing at ${wind_kph} km/h from the ${wind_dir}. Be cautious! `;
  } else if (wind_kph > 10) {
    message += `There's a gentle breeze blowing at ${wind_kph} km/h from the ${wind_dir}. `;
  }

  // Humidity-based message
  if (humidity > 80) {
    message +=
      "The humidity is high, so it might feel warmer than the actual temperature. Stay cool! ";
  } else if (humidity < 30) {
    message += "The air is quite dry. Consider using a moisturizer. ";
  }

  return message.trim();
};

export default generateWeatherMessage;
