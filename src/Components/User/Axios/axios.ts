import axios from "axios";
const baseUrl = "http://localhost:3000/user";
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem("userAccessToken");
  config.headers.Authorization =`Bearer ${accessToken}`;
return config;
},
error=>{
    return Promise.reject(error)
});

export default instance