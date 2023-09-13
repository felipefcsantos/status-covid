import axios from "axios";

// escolhi usar a biblioteca Axios para realizar as requisições HTTP e aqui defino a url padrõ em todas as chamadas

const api = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1'
})

export default api