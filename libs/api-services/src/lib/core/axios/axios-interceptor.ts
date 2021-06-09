import axios from 'axios'
import ApiError from './axios-helper/api-error'
//import {createLogHeader} from './axios-helper/create-log-header'
//import {LocalStorageSecurity} from '@payment-integration-system/common-utils'
const SERVER_DOMAIN = process.env.NX_URL || ''
//import { BASEURL } from '@payment-integration-system/api-interface';
// console.log("Enviroment", process.env.NODE_ENV);
//const APP_PORT = process.env.PORT || ''
let Axios = axios.create({
  baseURL: SERVER_DOMAIN,
  //withCredentials: false,
  // crossDomain: true,
  // crossOrigin: true
})

Axios.interceptors.request.use(
  requestConfig => {
    return requestConfig
  },
  error => {
    return ApiError.errorHandler(error)
  }
)

Axios.interceptors.response.use(
  response => {
    // TO STORE THE JWT TOKEN FROM RESPONSE
    return response
  },
  error => {
    return ApiError.errorHandler(error)
  }
)
export default Axios
