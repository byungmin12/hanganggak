import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})

export default api;