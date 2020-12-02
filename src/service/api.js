import axios from 'axios'
//@TODO recomendo que use um enviroment para url, pois podem mudar me relação a local ou prod
const api = axios.create({
  baseURL: 'http://3.16.67.76:8080/api/'
})

export default api
