import { apiUrl } from "../config.json";
import http from "./httpService";

export function register(user) {
  return http.post(apiUrl + "/newUser", {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}

export function login(user) {
  return http.post(apiUrl + "/login", {
    email: user.email,
    password: user.password,
  });
}
