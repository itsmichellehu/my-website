from bs4 import BeautifulSoup
import cssutils
import os

def load_html_content(filepath):
    try:
        with open(filepath, 'r') as file:
            return file.read()
    except IOError as e:
        print(f"Error opening {filepath}: {e}")
        return None

def save_html_content(filepath, content):
    try:
        with open(filepath, 'w') as file:
            file.write(content)
    except IOError as e:
        print(f"Error writing to {filepath}: {e}")

def save_css(styles, output_css_file):
    try:
        cssutils.ser.prefs.useMinified()  # Optional: Minify CSS
        with open(output_css_file, 'w') as file:
            for style in styles.values():
                file.write(style.cssText + '\n')  # Removed .decode('utf-8')
    except IOError as e:
        print(f"Error writing to {output_css_file}: {e}")

def extract_styles(html_content, output_css_file='scans.css'):
    if html_content is None:
        return
    soup = BeautifulSoup(html_content, 'html.parser')
    styles = {}

    for style in soup.find_all("style"):
        css = cssutils.parseString(style.encode_contents())
        for rule in css:
            if rule.type == rule.STYLE_RULE:
                styles[rule.selectorText] = rule
        style.decompose()

    for elem in soup.find_all(class_=True):
        class_list = elem['class']
        selector = '.' + '.'.join(class_list)
        if selector not in styles:
            new_rule = cssutils.css.CSSStyleRule(selectorText=selector)
            new_rule.style['color'] = 'blue'  # Example style
            styles[selector] = new_rule

    save_css(styles, output_css_file)
    return str(soup)

html_path = 'postup-page-formatted-js.html'
html_content = load_html_content(html_path)
if html_content:
    updated_html = extract_styles(html_content)
    save_html_content(html_path, updated_html)