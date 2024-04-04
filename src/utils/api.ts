import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5074/api/v1",
});
