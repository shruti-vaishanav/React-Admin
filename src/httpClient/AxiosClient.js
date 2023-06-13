/* eslint-disable prettier/prettier */
// import {handleApiError, handleRequest, handleResponse} from './ClientHelper';
import { GetStorage } from 'utils/localstorage';

import Axios from 'axios';
import { handleRequest, handleResponse, handleApiError } from './ClientHelper';

export function axiosClient(baseURL) {
  const clientInstance = Axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Barear ${GetStorage('logintoken')}`
    }
  });
  clientInstance.interceptors.request.use(handleRequest);
  clientInstance.interceptors.response.use(handleResponse, handleApiError);
  return clientInstance;
}
