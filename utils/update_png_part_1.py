# [Part 1/2] Run script to clean up png file names downloaded from WebFlow: removes all leading randomized characters and the first '_'

import os

# Directory containing the files
directory = 'public/images/postup'

# Iterate over each file in the directory
for filename in os.listdir(directory):
    # Check if the file has an underscore, indicating a prefix exists
    if '_' in filename:
        # Find the position of the first underscore
        underscore_index = filename.find('_')
        # Remove everything up to and including the first underscore
        new_name = filename[underscore_index + 1:]  # Skip the underscore
        # Construct the full old and new file paths
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_name)
        # Rename the file
        os.rename(old_path, new_path)
        print(f'Renamed "{filename}" to "{new_name}"')

print("Renaming complete.")
