import { apiUrl } from "../config.json";
import http from "./httpService";

export function getWeather(city) {
  return http.get(`${apiUrl}/getWeather/${city}`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
}

export function getHistory() {
  return http.get(`${apiUrl}/getWeatherHistory`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
}
