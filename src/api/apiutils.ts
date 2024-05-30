import axios from "axios";
import qs from "query-string";

/**
 *
 * @param {string} path
 * @returns axios 适配器
 */
export const getInstance = function (path: string) {
  return axios.create({
    baseURL: path,
  });
};

// 编码
export const encodeData = function (params: any = {}) {
  for (const key in params) {
    const type = Object.prototype.toString.call(params[key]);
    if (type == "[object Object]" || type == "[object Array]") {
      params[key] = JSON.stringify(params[key]);
    }
  }
  return qs.stringify(params);
};
