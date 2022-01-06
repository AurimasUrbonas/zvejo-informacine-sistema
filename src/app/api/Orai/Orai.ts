import axios from "axios";

const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

export const Orai = async () => {
  const weatherResponse = await axios({
    url: `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=Vilnius&days=1&aqi=no&alerts=no`,
    method: "GET",
  });

  return weatherResponse.data;
};
