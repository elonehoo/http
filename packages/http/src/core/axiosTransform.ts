import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestOptions, Result } from '../types/types'

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {

  //Process configuration before request
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  // Request processed successfully
  transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  // Request failure handling
  requestCatch?: (e: Error) => Promise<any>;

  // Interceptor before request
  requestInterceptors?: (
    config: AxiosRequestConfig,
    options: CreateAxiosOptions
  ) => AxiosRequestConfig;

  // Interceptor after request
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  // Interceptor error handling before request
  requestInterceptorsCatch?: (error: Error) => void;

  // Interceptor error handling after request
  responseInterceptorsCatch?: (error: Error) => void;
}
