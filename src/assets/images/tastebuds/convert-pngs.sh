#!/bin/bash

# Create output directory
mkdir -p webp_output

# Convert all .png files in current directory to .webp
for file in *.png; do
  output="webp_output/${file%.png}.webp"
  echo "Converting $file → $output"
  cwebp "$file" -o "$output"
done

echo "Conversion complete. Files saved in ./webp/"
