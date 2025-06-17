import os

def bulk_rename_remove_prefix(directory):
    for filename in os.listdir(directory):
        if "_" in filename:
            new_name = filename.split("_", 1)[1]  # split on first underscore and take second part
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_name)

            # Avoid overwriting existing files
            if not os.path.exists(new_path):
                os.rename(old_path, new_path)
                print(f"Renamed: {filename} -> {new_name}")
            else:
                print(f"Skipping {filename}, target {new_name} exists.")

if __name__ == "__main__":
    folder = "postup"
    bulk_rename_remove_prefix(folder)
