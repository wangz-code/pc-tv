// @ts-nocheck
import VideoDetail from "./VideoDetail.vue";
import VideoList from "./VideoList.vue";
import Hls from "hls.js";
import DPlayer from "wz-dplayer";
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

const dpNormal = function (dpRef: Ref<HTMLElement | null>, url: string) {
  return new DPlayer({
    container: dpRef.value,
    volume: 0.9,
    video: {
      url,
    },
  });
};


const disKey = (event: any) => {
  event.preventDefault();
  return false;
};

export { VideoList, VideoDetail, dpHls,dpNormal, disKey };
