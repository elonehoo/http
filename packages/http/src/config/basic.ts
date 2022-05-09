import { send } from "../core/Axios"
import { AxiosTransform } from '../core/axiosTransform'
import { deepMerge } from "../util"
import axios, { AxiosResponse } from 'axios'
import { RequestEnum, ResultEnum, ContentTypeEnum } from '../enums/httpEnum'
import { RequestOptions, Result, CreateAxiosOptions } from '../types/types'



function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new send(
    deepMerge(
      {
        timeout: 10 * 1000,
        authenticationScheme: '',
        // 接口前缀
        // prefixUrl: urlPrefix,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: false,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: false,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: 'none',
          // 接口地址
          // apiUrl: globSetting.apiUrl,
          // 接口拼接地址
          // urlPrefix: urlPrefix,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true,
        },
        withCredentials: false,
      },
      opt || {}
    )
  );
}

export const basicHttp = createAxios();
