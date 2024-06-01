import VideoDetail from "./VideoDetail.vue";
import VideoList from "./VideoList.vue";
import Hls from "hls.js";
import DPlayer from "dplayer";
import { Ref } from "vue";

const dpHls = function (dpRef: Ref<HTMLElement | null>, url: string) {
  return new DPlayer({
    container: dpRef.value,
    volume: 0.9,
    video: {
      url,
      type: "customHls",
      customType: {
        customHls: function (video: any) {
          const hls = new Hls();
          hls.loadSource(video.src);
          hls.attachMedia(video);
        },
      },
    },
  });
};

// 阻止默认的上下文菜单行为
const disContextMenu = () => {
  // 监听页面上的右键单击事件
  document.addEventListener("contextmenu", function (event) {
    // 阻止默认的上下文菜单行为
    event.preventDefault();

    // 在这里可以添加您自己的逻辑或提示信息，比如：
    console.log("右键菜单已被禁用");
  });
};

export { VideoList, VideoDetail, dpHls, disContextMenu };
