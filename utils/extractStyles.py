from bs4 import BeautifulSoup

def extract_and_remove_styles(html_file_path, css_file_path):
    # Read the HTML file with proper encoding
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Parse the HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # Initialize variable to collect all styles
    styles = ''

    # Extract and remove <style> tags
    for style_tag in soup.find_all('style'):
        if style_tag.string:
            styles += style_tag.string + '\n'  # Add a newline for separation between style blocks
        style_tag.decompose()  # Remove the tag from the soup

    # Write the styles to a new CSS file
    with open(css_file_path, 'w', encoding='utf-8') as file:
        file.write(styles)

    # Save the modified HTML
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

# Example usage
extract_and_remove_styles('tastebuds-page.html', 'tastebuds-styles.css')