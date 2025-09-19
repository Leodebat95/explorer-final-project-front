// api --- arq. pra guardar as configurações do Axios


import axios from "axios";

export const api = axios.create({

  baseURL: 'http://localhost:3000'
});
    /* baseURL (que contém o endereço do backend) pode ser de duas formas:
          local --- tem que ser sem a "/" ao final (ex: "http://localhost:3000")
          hospedada --- 'https://rocketmoves-api.onrender.com' */

api.interceptors.request.use( (requestConfig) => {

  const token = localStorage.getItem("@foodexplorer:token");

  if(token) {
    requestConfig.headers.Authorization = `Bearer ${token}`;
  };

  return requestConfig;
});


api.interceptors.response.use(

  (response) => response,

  (error) => {

    if(error.response.status === 401) {

      localStorage.removeItem("@foodexplorer:token");
      localStorage.removeItem("@foodexplorer:user");

      window.location.href = "/";
    };
    return Promise.reject(error);
  }
);
