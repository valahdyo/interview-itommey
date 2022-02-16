import axios from "axios"

/**
 * Setting up axios
 */
export const API = axios.create({
  baseURL: "http://localhost:5000",
})
