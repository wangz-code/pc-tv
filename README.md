# pc-tv 电脑变成电视 PC to TV

缘起: 家里闲置几块硬盘, 还有一台电脑, 小朋友天天喜欢看电视, 目前家里是天猫魔盒, 先不说广告和各种 VIP 会员片源,广告, 推送的都是一些垃圾的动画片, 小赛罗, 贝利亚 都是垃圾狗屎!

# 首页

## <img src="https://img2.imgtp.com/2024/05/28/WZq5lzIX.png"></img>

<img src="https://img2.imgtp.com/2024/05/30/heGfXeQZ.png"></img>

# 初步设想

- ~~Wails~~ 此方案放弃,首先前端开发组合非常割裂, 其次是浏览器api有问题两边表现不一致, 还不好调试

### 采用vite+vue3 + nginx +  chrome.exe --kiosk 模式

- 转hls脚本 把当前目录下的*.mp4 转成 hls(m3u8)
```sh
alias tohls='for file in *.mp4; do if [ -f "$file" ]; then filename=$(basename -- "$file"); filename_no_ext="${filename%.*}"; ffmpeg -i "$file" -c:v libx264 -hls_time 10 -hls_list_size 0 -hls_segment_filename "${filename_no_ext}_%03d.ts" "${filename_no_ext}.m3u8"; echo "已将文件 $file 转换为 HLS 格式."; fi; done'

```

- nginx.config

```sh
    #静态视频文件
    server {
        listen  6600;
        server_name localhost;
        charset utf-8;
        location / {
            root /pc-tv/dist;
        }
        location /hls_videos {
            alias /pc-tv/hls_videos;
            autoindex on;
        }
    }
```

- vite.config.ts

```javascript
  server: {
    proxy: {
      // 字符串简写写法：http://localhost:5173/foo -> http://localhost:4567/foo
      "/hls_videos": "http://127.0.0.1:6600", // 访问本机不能用localhost会500错误
    },
  },

```

- win10 创建启动脚本 
```sh
# 路径: C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\chromeRun.bat
# 写入如下内容, 启动后就能直接进入全屏模式  http://cn.bing.com/ 替换为本地路径 http://127.0.0.1:6600 , 使用Alt+F4能退出

start chrome.exe --kiosk http://cn.bing.com
```

### split.sh 视频分割脚本

仅支持数字开头的剧集, 自动切分, 比如 01.mp4 分割后 01.ts... 01.m3u8 文件

### 库

- hls.js
- dplayer
- arco 组件库
- vue3
- 支持 m3u8 的 js 播放器 , 可能需要魔改支持遥控器快进,快退, 上一集,下一集, 视频列表, 剧集列表等...

### 硬件

- PC
- 2.4 遥控器 拼夕夕 18 块

### 问题

放弃 wails 采用chrome全屏模式
- 使用了新版本的组件库, 热更新有问题, 目前就是前端单独开发, 之后用 wails 套个壳子
- wails下遥控器无法识别 返回 主页, 菜单键 keycode = "Unidentified" 目前当成返回用, 声音加减正常
