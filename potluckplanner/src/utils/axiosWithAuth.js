import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "http://localhost:1111/api",
  });
};
// "http://localhost:1111/api"
// "https://potluckplanner1.herokuapp.com/api"
