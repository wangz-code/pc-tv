/*
 * @Author: wangqz
 * @Date: 2024-05-30
 * @LastEditTime: 2024-05-30
 * @Description: content
 */
import { getInstance } from "./apiutils";
const base = "/hls_videos"
const req = getInstance(base);



// 获取视频列表
export const queryVideoList = () => req.get("/");

// 获取视频详情
export const queryVideoDetail = (name: string) => req.get(`/${encodeURI(name)}/`);
// 拼接url
export const videoUrl = (path: string[]) => [base,...path].join("/");
