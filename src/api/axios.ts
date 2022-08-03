import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { Toast } from "vant";

type Config = AxiosRequestConfig & {
  alert?: boolean;
  loading?: boolean;
  loadingText?: string;
};

export type CommonRes<T = any> = {
  status: string;
  data: T;
};

type Plugin = {
  request?: (config: Config) => Config;
  response?: (data: AxiosResponse<CommonRes>) => AxiosResponse;
};

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

const usePlugin = (plugin: Plugin) => {
  if (plugin.request) {
    instance.interceptors.request.use(plugin.request);
  }

  if (plugin.response) {
    instance.interceptors.response.use(plugin.response);
  }
};

const loadingPlugin: Plugin = {
  request: config => {
    if (config.loading) {
      Toast.loading(config.loadingText || "加载中...");
    }

    return config;
  },
  response: data => {
    const config = data.config as Config;
    if (config.loading) {
      Toast.clear();
    }

    return data;
  },
};

const alertPlugin: Plugin = {
  response: data => {
    const config = data.config as Config;
    if (config.alert === true) {
      Toast.fail({
        message: data.data.status,
      });
    }
    return data;
  },
};

usePlugin(loadingPlugin);
usePlugin(alertPlugin);

type Request<R, T> = (params?: T, config?: Config) => Promise<CommonRes<R>>;
type RequestMethod = <R, T = any>(url: string, config?: Config) => Request<R, T>;

const wrapperRequest = (method: Method): RequestMethod => {
  // 默认如果有错误会自动弹出toast，后面也可以关闭。
  return <R, T = any>(url: string, config: Config = { alert: true }) => {
    return (params?: T, requestConfig?: Config) => {
      let realParams = [
        url,
        params,
        {
          ...config,
          ...requestConfig,
        },
      ];
      if (method.toLowerCase() === "get") {
        realParams = [url, { params: params, ...config, ...requestConfig }];
      }

      // 这里axios的定义是<T = any, R = AxiosResponse<T>, D = any>
      // 如果在responseInterceptor里完全修改了返回值，第一个参数是必传的。
      return instance[method]<any, CommonRes<R>>(...realParams);
    };
  };
};

export const post = wrapperRequest("post");
export const del = wrapperRequest("delete");
export const put = wrapperRequest("put");
export const get = wrapperRequest("get");
