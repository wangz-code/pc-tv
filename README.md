# pc-tv 电脑变成电视 PC to TV

缘起: 家里闲置几块硬盘, 还有一台电脑, 小朋友天天喜欢看电视, 目前家里是天猫魔盒, 先不说广告和各种 VIP 会员片源, 推送的都是一些垃圾没有任何营养的动画片, 小赛罗, 贝利亚 都是垃圾狗屎!

# 初步设想

~~Nginx + HLS~~

### wails = golang+ vue3 + chrome

> HLSHTTP Live Streaming 苹果公司开放的支持 html5 直接播放的视频流技术。 Nginx 实现 http 服务器功能，可以通过 http 访问 m3u8 文件实现播放。

要使用 HLS 播放的第一步，是将视频文件切割成多个 ts 视频流，然后使用 m3u8 索引文件进行播放。生成 m3u8 和 ts 文件可以借助 ffmpeg 工具，使用如下命令就可以将一般的视频文件转换成 HLS 支持的文件。

```bash
ffmpeg -i "G:\video magic leap2.avi" -f hls "G:\video\HLR\test.m3u8"
```
对于大文件用上面这种方式有可能出现 m3u8 缺少索引的情况，因此也可以使用以下的方式对文件进行转换。

```bash
ffmpeg -i bigfile.mp4 -codec:v libx264 -codec:a aac -map 0 -f ssegment -segment_format mpegts -segment_list tos.m3u8 -segment_time 10 taste_of_shanghai%04d.ts
```

```bash

# 截取视频
ffmpeg -i 01.mp4 -ss 00:05:00 -t 00:05:00 -c copy output.mp4
```
让系统开机全屏启动

感觉直接用下的 wails (golang+vue) 更加方便部署, 性能虽然不如 nginx 但是我也没有高并发需求 基本够用了

### 软件

-   使用 vue3 开发前端交互
-   使用支持 m3u8 的 js 播放器 , 可能需要魔改支持遥控器快进,快退, 上一集,下一集, 视频列表, 剧集列表等...

### 硬件

-   PC
-   2.4 遥控器
