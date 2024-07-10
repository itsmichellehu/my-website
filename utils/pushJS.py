from bs4 import BeautifulSoup
import os

# Path to the HTML file
html_file_path = 'postup-page.html'

# Read the HTML file
with open(html_file_path, 'r') as file:
    html_content = file.read()

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Extract all <script> tags
script_tags = soup.find_all('script')

# Move each <script> tag to the bottom of the <body> tag
body_tag = soup.find('body')
if body_tag:
    for script_tag in script_tags:
        body_tag.append(script_tag.extract())

    # Write the modified HTML content to a new file
    output_html_file_path = 'path_to_output_html_file.html'
    with open(output_html_file_path, 'w') as output_file:
        output_file.write(str(soup))

    print(f'Modified HTML saved to {output_html_file_path}')
else:
    print('No <body> tag found in the HTML file.')
