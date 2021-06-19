import axios from "axios";
export const axiosClient = axios.create({
  // baseURL: 'https://6008fc180a54690017fc28e1.mockapi.io/',
  // baseURL: "http://localhost:3000",
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const FormData = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
