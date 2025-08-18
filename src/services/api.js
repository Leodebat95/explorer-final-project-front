// api --- arq. pra guardar as configurações do Axios


import axios from "axios"

export const api = axios.create({

  baseURL: 'https://rocketmoves-api.onrender.com'
})
