# [Part 1/2] Run script to clean up img src filenames of images downloaded from WebFlow: removes all leading randomized characters and the first '_'

from bs4 import BeautifulSoup
import os

# Path to your HTML file
html_file_path = 'postup-casestudy-copy.html'

# Read the HTML file
with open(html_file_path, 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML
soup = BeautifulSoup(html_content, 'html.parser')

# Find all <img> elements and update their 'src' attributes
for img in soup.find_all('img'):
    src = img.get('src')
    if '_' in src:
        # Find the position of the first underscore
        underscore_index = src.find('_')
        # Remove everything up to and including the first underscore
        new_src = src[underscore_index + 1:]
        img['src'] = new_src

# Write the modified HTML back to the file
with open(html_file_path, 'w', encoding='utf-8') as file:
    file.write(str(soup))

print("HTML src attributes updated.")
