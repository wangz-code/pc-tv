###
 # @Author: wangqz
 # @Date: 2024-05-27
 # @LastEditTime: 2024-05-27
 # @Description: content
### 
#!/bin/bash

input_dir="./videos"
output_dir="./hls_videos"



# 遍历视频文件并转换为 HLS 格式
find "${input_dir}" -type f -name '*.mp4' | while read video_file; do
    filename=$(basename "${video_file}")
    subdir=$(dirname "${video_file}")
    subdir_relative=$(realpath --relative-to="${input_dir}" "${subdir}" 2>/dev/null || python -c "import os.path; print(os.path.relpath('${subdir}', '${input_dir}'))")
    subdir_name=$(echo "${subdir_relative}" | tr '/' '_')
    output_subdir="${output_dir}/${subdir_name}"

    mkdir -p "${output_subdir}"

    filename_no_ext="${filename%.*}"
    output_file="${output_subdir}/${filename_no_ext}.m3u8"

    echo $output_file

    echo "Converting ${filename} to HLS format..."
    ffmpeg -i "${video_file}" -vf "scale=1280:-2" -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 4 -hls_list_size 0 -hls_segment_filename "${output_subdir}/${filename_no_ext}_%03d.ts" "${output_file}" -hide_banner -y

    echo "Conversion of ${filename} completed."
done

echo "All videos converted to HLS format."