import os

# Directory containing the files
directory = 'public/images/tastebuds'

# Iterate over each file in the directory
for filename in os.listdir(directory):
    if '_' in filename:  # Check if the filename contains an underscore
        underscore_index = filename.find('_')  # Find the position of the first underscore
        # Remove everything up to and including the first underscore
        new_name = filename[underscore_index + 1:]
    else:
        new_name = filename

    # Transform new_name: replace spaces with hyphens and convert to lowercase
    new_name = new_name.replace(' ', '-').lower()

    # Check if a transformation is necessary
    if new_name != filename:
        # Construct the full old and new file paths
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_name)
        # Rename the file
        os.rename(old_path, new_path)
        print(f'Renamed "{filename}" to "{new_name}"')

print("Renaming complete.")
