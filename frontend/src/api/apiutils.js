/*
 * @Author: wangqz
 * @Date: 2024-04-22
 * @LastEditTime: 2024-04-22
 * @Description: content
 */

import axios from "axios";
import qs from "query-string";

/**
 * 
 * @param {string} path 
 * @returns axios 适配器
 */
export const getInstance = function (path) {
	return axios.create({
		baseURL: path,
	});
};

// 编码
export const encodeData = function (params = {}) {
	for (const key in params) {
		const type = Object.prototype.toString.call(params[key]);
		if (type == "[object Object]" || type == "[object Array]") {
			params[key] = JSON.stringify(params[key]);
		}
	}
	return qs.stringify(params);
};
