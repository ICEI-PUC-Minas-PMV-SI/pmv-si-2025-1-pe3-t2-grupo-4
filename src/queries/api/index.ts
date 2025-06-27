import axios from "axios";

console.log("NEXT_API_URL", process.env.NEXT_PUBLIC_API_URL);

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:10000",
  headers: {
    "Content-Type": "application/json",
    "x-access-key": process.env.NEXT_PUBLIC_API_KEY || "",
  },
});

export { axiosInstance };
