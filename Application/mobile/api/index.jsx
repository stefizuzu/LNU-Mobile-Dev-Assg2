import { create } from "apisauce";
import { API_URL } from "./apiUrl";

const api = create({
  baseURL: API_URL,
  headers: { Accept: "application/json" }, // other default headers here
});

export { API_URL };
export default api;
