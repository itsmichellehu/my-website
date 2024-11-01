#!/bin/bash

# Specify the folder where your videos are located
input_folder="./compress-pending"   # Change to the path where your videos are located
output_folder="./compressed_videos"  # Folder where compressed videos will be saved

# Create the output folder if it doesn't exist
mkdir -p "$output_folder"

# Loop through all video files in the input folder
for video_file in "$input_folder"/*.mp4; do  # Change the extension if needed
    # Extract the file name without extension
    base_name=$(basename "$video_file" .mp4)

    # Compress the video using ffmpeg with additional compression settings
    ffmpeg -i "$video_file"
           -vcodec libx264
           -crf 28
           -b:v 1M
           -acodec aac
           -b:a 128k
           "$output_folder/${base_name}_compressed.mp4"

    echo "Compressed: $video_file -> $output_folder/${base_name}_compressed.mp4"
done
