/*
 * @Author: wangqz
 * @Date: 2024-04-22
 * @LastEditTime: 2024-04-22
 * @Description: content
 */
import { getInstance, encodeData } from "./apiutils";
import qs from "query-string";

const instance = getInstance("/api/normal");

// 查询订单
export function queryBillInfo(params) {
	return instance.get("/sales/unifycash/getonesalebill", { params });
}
// 去支付
export function onlinePrePay(query, data) {
	return instance.post(qs.stringifyUrl({ url: "/onlinepaywsc/pay/onlinePrePay", query }), encodeData({ data }));
}
