import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelize, decamelize, logger } from '../lib';


interface AxiosInstanceTyped extends AxiosInstance {
  <T = any>(config: AxiosRequestConfig<any>): Promise<AxiosResponse<T>>;
}

const client: AxiosInstanceTyped = axios.create({
  baseURL: '/api',
  responseType: 'json' as const,
  headers: {
    'Content-Type': 'application/json',
  },
});
client.interceptors.request.use(
  (config) => {
    return {
      ...config,
      transformRequest: (request) => {
        return JSON.stringify(decamelize(request));
      },
      paramsSerializer: {
        serialize: (params) => {
          return new URLSearchParams(decamelize(params)).toString();
        },
      },
      transformResponse: (response) => {
        if (response) {
          return camelize(JSON.parse(response));
        }
        return null;
      },
    };
  },
  (error) => {
    logger('error', error, 'error');
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    logger('error axios', error, 'error');

    if (error.response) {
      logger('Error response:', error.response, 'error');
    } else {
      logger('Error Message:', error.message, 'error');
    }
    return Promise.reject(error);
  },
);

export default client;
