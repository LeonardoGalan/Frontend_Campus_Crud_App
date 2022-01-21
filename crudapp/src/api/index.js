import axios from "axios";

const api = axios({
  baseURL: "https://localhost:8080/",
  responseType: "json",
});

export default api;
