import os
from PIL import Image, ImageEnhance
import io

def compress_to_webp_with_resize_and_saturation(
    input_dir,
    output_dir,
    max_size_kb=100,
    start_quality=90,
    min_quality=50,
    resize_step=0.9,
    min_dimension=300,
    saturation_boost=1.1
):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    max_size_bytes = max_size_kb * 1024

    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.tiff', '.webp')):
            input_path = os.path.join(input_dir, filename)
            output_filename = os.path.splitext(filename)[0] + ".webp"
            output_path = os.path.join(output_dir, output_filename)

            try:
                with Image.open(input_path) as img:
                    icc_profile = img.info.get('icc_profile')

                    # Convert to RGBA if image has transparency, else RGB
                    if 'A' in img.getbands():
                        if img.mode != "RGBA":
                            img = img.convert("RGBA")
                    else:
                        if img.mode != "RGB":
                            img = img.convert("RGB")

                    # Saturation boost only if no alpha (RGB images)
                    if saturation_boost != 1.0 and img.mode == "RGB":
                        enhancer = ImageEnhance.Color(img)
                        img = enhancer.enhance(saturation_boost)

                    while True:
                        quality = start_quality
                        while quality >= min_quality:
                            buffer = io.BytesIO()
                            img.save(buffer, format="WEBP", quality=quality, method=4, icc_profile=icc_profile)
                            size = buffer.tell()

                            if size <= max_size_bytes:
                                with open(output_path, "wb") as f_out:
                                    f_out.write(buffer.getvalue())
                                print(f"Saved {output_filename} at quality {quality} with size {size/1024:.1f} KB, dimensions: {img.size}")
                                break
                            else:
                                quality -= 5
                        else:
                            # Resize if min quality reached and size still too big
                            if img.width * resize_step < min_dimension or img.height * resize_step < min_dimension:
                                # Can't resize smaller, save at min quality anyway
                                img.save(output_path, format="WEBP", quality=min_quality, method=4, icc_profile=icc_profile)
                                final_size = os.path.getsize(output_path)
                                print(f"Saved {output_filename} at min quality {min_quality} with size {final_size/1024:.1f} KB, dimensions: {img.size} (min dimension reached)")
                                break
                            else:
                                new_width = int(img.width * resize_step)
                                new_height = int(img.height * resize_step)
                                img = img.resize((new_width, new_height), Image.LANCZOS)
                                print(f"Resized image to {img.size} and retrying compression")
                                continue
                        break

            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    input_folder = "input"
    output_folder = "output"
    compress_to_webp_with_resize_and_saturation(input_folder, output_folder)
