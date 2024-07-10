import cssutils
from collections import defaultdict

def normalize_styles(rule):
    """
    Converts the styles into a standardized order to avoid duplicates based on differing order.
    """
    styles = []
    for prop in rule.style:
        styles.append((prop.name, prop.value))
    styles.sort(key=lambda x: x[0])  # Sort by property name
    return tuple(styles)

def remove_duplicate_css_selectors(css_file_path, output_css_file_path=None):
    try:
        parser = cssutils.CSSParser()
        sheet = parser.parseFile(css_file_path)
    except Exception as e:
        print(f"Error parsing CSS file '{css_file_path}': {e}")
        return

    unique_selectors = defaultdict(list)

    # Traverse through all CSS rules
    for rule in sheet:
        if isinstance(rule, cssutils.css.CSSStyleRule):
            selector_key = rule.selectorText
            style_key = normalize_styles(rule)

            # Group by selector, then check unique styles within each group
            if style_key not in unique_selectors[selector_key]:
                unique_selectors[selector_key].append(style_key)

    # Create a new stylesheet
    new_sheet = cssutils.css.CSSStyleSheet()
    for selector, styles in unique_selectors.items():
        for style in styles:
            # Recreate the rule for each selector-style pair
            style_text = "; ".join(f"{k}: {v}" for k, v in style)
            new_rule = cssutils.css.CSSStyleRule(selectorText=selector, style=style_text)
            new_sheet.add(new_rule)

    # Set output path or overwrite the original
    if output_css_file_path is None:
        output_css_file_path = css_file_path

    try:
        # Write back to file
        with open(output_css_file_path, 'w', encoding='utf-8') as f:
            f.write(new_sheet.cssText.decode('utf-8'))
        print(f"CSS file '{output_css_file_path}' updated successfully.")
    except Exception as e:
        print(f"Error writing CSS file '{output_css_file_path}': {e}")

# Usage
css_file_path = 'globals-test-input.css'
output_css_file_path = 'globals-test-input.css'  # Set to None to overwrite the original
remove_duplicate_css_selectors(css_file_path, output_css_file_path)
