import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7053/api/v1",
});
