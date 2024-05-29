# pc-tv 电脑变成电视 PC to TV

缘起: 家里闲置几块硬盘, 还有一台电脑, 小朋友天天喜欢看电视, 目前家里是天猫魔盒, 先不说广告和各种 VIP 会员片源,广告, 推送的都是一些垃圾的动画片, 小赛罗, 贝利亚 都是垃圾狗屎!

# 首页

<img src="https://img2.imgtp.com/2024/05/28/WZq5lzIX.png"></img>

# 初步设想

~~Nginx + HLS~~
wails


### wails = golang+ vue3 + chrome

```bash
# 截取视频
ffmpeg -i 01.mp4 -ss 00:05:00 -t 00:05:00 -c copy output.mp4
```

让系统开机全屏启动 感觉直接 wails (golang+vue) 更加方便部署, 性能虽不如 nginx 基本够用了

### split.sh 视频分割脚本

仅支持数字开头的剧集, 自动切分, 比如 01.mp4 分割后 01.ts... 01.m3u8 文件

### 库

-   hls.js
-   dplayer
-   arco 组件库
-   vue3
-   支持 m3u8 的 js 播放器 , 可能需要魔改支持遥控器快进,快退, 上一集,下一集, 视频列表, 剧集列表等...

### 硬件

-   PC
-   2.4 遥控器 拼夕夕 18 块

### 问题

-   使用了新版本的组件库, 热更新有问题, 目前就是前端单独开发, 之后用 wails 套个壳子
-   遥控器无法识别 返回 主页,  菜单键keycode = "Unidentified" 目前当成返回用, 声音加减正常
