import axios from 'axios'
//@TODO recomendo que use um enviroment para url, pois podem mudar me relação a local ou prod
const api = axios.create({
  baseURL: 'http://ec2-3-23-113-133.us-east-2.compute.amazonaws.com:8080/api/'
})

export default api
