import { apiUrl } from "../../config.json";
import http from "./httpService";

export function register(user) {
  return http.post(apiUrl + "/newUser", {
    name: user.name,
    age:user.age,
    city:user.city,
    email: user.email,
    phone: user.phone
  });
}

export function getAllUsers(user) {
  return http.get(apiUrl + "/getAllUsers");
}
