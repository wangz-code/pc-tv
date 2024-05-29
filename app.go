package main

import (
	"context"
	"fmt"
	"os"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// fuck
func (a *App) Fuck(name string) string {
	return fmt.Sprintf("Hello Fuck")
}

type Videos struct {
	Path    string   `json:"path"`    // 路径
	Name    string   `json:"name"`    // 视频名 默认文件夹名
	List    string   `json:"List"`    // 列表, 子目录的 .m3u8文件 , 有几个便是几集
	Thumb   string   `json:"thumb"`   // 缩略图
	History []string `json:"history"` // 历史记录, [0]:剧集 [1]:时分秒
}

var HlsPath = "./hls_videos"

// 获取视频列表
func (a *App) GetVideoList() []Videos {
	videoList := []Videos{}
	files, err := os.ReadDir(HlsPath)
	if err != nil {
		fmt.Println("读取文件夹时出错:", err)
		return videoList
	}
	for _, file := range files {
		if file.IsDir() {
			dirName := file.Name()
			// 创建 Videos 对象
			video := Videos{Name: dirName}

			fmt.Println("视频名:", video.Name)
		}
	}
	return videoList
}

// 获取单个视频详情
func (a *App) GetVideoDetail() Videos {
	return Videos{}
}
