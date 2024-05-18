// https://openweathermap.org/api/one-call-3#current
import axios from "axios"
import { configDotenv } from "dotenv";


configDotenv() // load .env in server directory
const endpoint = "https://api.openweathermap.org/data/3.0/onecall";
const apiKey = process.env.WEATHER_API_KEY

const getWeather = async (lat, long) => {
  const params = `?lat=${lat}&lon=${long}&appid=${apiKey}` // not sure if 'exclude' is needed
  const request = {
    method: "GET",
    url: `${endpoint}${params}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  
  const response = await axios(request).catch((error) => {
    console.log("ERROR GETTING WEATHER")
    console.log(error)
  })
  console.log(response)
//   return response.data
};

export { getWeather };