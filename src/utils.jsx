import Axios from "axios";

// Default API Config
const apiSettings = {
  baseURL: `https://ascente-invest.onrender.com/api/v1/dj-rest-auth/`,
  // headers: {
  //   "Content-Type": "application/json",
  // },
};

// Instance to use for Unprotected endpoints
export const apiClientPublic = Axios.create(apiSettings);

apiClientPublic.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    return error?.response;

    // throw error?.response?.data?.message || error.message;
  }
);
