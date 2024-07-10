from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import os
import requests
from urllib.parse import urlparse, urljoin

# Start the Safari WebDriver
driver = webdriver.Safari()

# Navigate to the webpage
driver.get('https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2-copy-3')

# Wait for the page to load
time.sleep(5)

# Open the Developer Tools
driver.find_element_by_tag_name('body').send_keys(Keys.COMMAND + Keys.ALT + 'i')
time.sleep(2)

# Switch to the "Sources" tab
driver.find_element_by_css_selector('[aria-label="Sources panel"]').click()
time.sleep(2)

# Expand all folders (optional)
folder_elements = driver.find_elements_by_css_selector('[role="treeitem"][aria-expanded="false"]')
for folder_element in folder_elements:
    folder_element.click()
    time.sleep(0.5)

# Find all file URLs
urls = driver.find_elements_by_css_selector('[role="treeitem"] [aria-label="Copy full path to resource"]')
download_urls = [url.get_attribute('textContent') for url in urls]

# Create a directory to save the files
output_dir = 'downloads'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Download each file
for download_url in download_urls:
    # Ensure the URL is absolute
    if not download_url.startswith('http'):
        download_url = urljoin(driver.current_url, download_url)
    
    # Get the file name from the URL
    parsed_url = urlparse(download_url)
    file_name = os.path.basename(parsed_url.path)
    file_path = os.path.join(output_dir, file_name)
    
    # Download the file
    response = requests.get(download_url)
    
    # Save the file to the output directory
    with open(file_path, 'wb') as file:
        file.write(response.content)
        print(f"Downloaded: {file_name}")

# Close the WebDriver
driver.quit()
