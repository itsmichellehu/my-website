import re
import os

def move_flex_classes(file_path):
    # Read the SCSS file
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
    except FileNotFoundError:
        print("File not found")
        return
    except IOError:
        print("Error reading file")
        return

    # Regular expression to find .flex- classes
    pattern = re.compile(r'(^|\n)(\.[a-zA-Z0-9_-]*flex-[^\{]*\{[^}]*\})', re.MULTILINE)
    
    flex_classes = []
    non_flex_content = []
    
    # Split content to handle it line by line
    lines = content.split('\n')
    inside_flex = False
    current_flex_block = []

    for line in lines:
        if re.match(pattern, line):
            if not inside_flex:
                inside_flex = True
                current_flex_block.append(line)
            else:
                current_flex_block.append(line)
        else:
            if inside_flex:
                # End of a flex block
                inside_flex = False
                flex_classes.extend(current_flex_block)
                current_flex_block = []
            non_flex_content.append(line)

    # Check if last lines belong to flex class
    if current_flex_block:
        flex_classes.extend(current_flex_block)

    # Reconstruct the file with flex classes at the bottom
    updated_content = '\n'.join(non_flex_content) + '\n' + '\n'.join(flex_classes)

    # Write updated content back to the file
    try:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        print("SCSS file has been updated successfully.")
    except IOError:
        print("Error writing file")

# File path
scss_file_path = 'public/css/tastebuds-styles.scss'
move_flex_classes(scss_file_path)
