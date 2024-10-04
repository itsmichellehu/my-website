# Remove duplicate CSS classes from one CSS file that are present in another CSS file. Does not remove classes in the other CSS file.

import cssutils
import logging

def get_classes_from_css(css_file_path):
    """Extract all class selectors from a CSS file."""
    css_parser = cssutils.CSSParser(loglevel=logging.CRITICAL)
    stylesheet = css_parser.parseFile(css_file_path)
    class_selectors = set()

    for rule in stylesheet:
        if isinstance(rule, cssutils.css.CSSStyleRule):
            selectors = rule.selectorText.split(',')
            for selector in selectors:
                # Find class selectors in the form of .classname
                class_names = [s.strip()[1:] for s in selector.split() if s.strip().startswith('.')]
                class_selectors.update(class_names)

    return class_selectors

def remove_common_classes(source_css_path, compare_css_path, output_css_file_path=None):
    # Extract all classes from both CSS files
    source_classes = get_classes_from_css(source_css_path)
    compare_classes = get_classes_from_css(compare_css_path)

    # Identify the unique classes in source_css (boardspace-1.css) that are not in compare_css (boardspace.css)
    unique_classes = source_classes - compare_classes

    # Parse source CSS (boardspace-1.css) and filter out rules that have common classes
    css_parser = cssutils.CSSParser(loglevel=logging.CRITICAL)
    stylesheet = css_parser.parseFile(source_css_path)

    # New stylesheet for purged CSS
    new_stylesheet = cssutils.css.CSSStyleSheet()

    for rule in stylesheet:
        if isinstance(rule, cssutils.css.CSSStyleRule):
            selectors = rule.selectorText.split(',')
            rule_used = False
            for selector in selectors:
                # Check if the rule contains only unique classes
                class_names = [s.strip()[1:] for s in selector.split() if s.strip().startswith('.')]
                if any(cls in unique_classes for cls in class_names):
                    rule_used = True
                    break
            if rule_used:
                new_stylesheet.add(rule)

    # Write the filtered CSS to a new file
    output_css_file_path = output_css_file_path or source_css_path.replace('.css', '.purged.css')
    output_css = new_stylesheet.cssText.decode('utf-8')

    with open(output_css_file_path, 'w', encoding='utf-8') as file:
        file.write(output_css)

    print(f"Purged CSS saved to: {output_css_file_path}")

# Example usage
source_css_path = 'boardspace-2.css'  # CSS to remove classes from
compare_css_path = 'boardspace-1.css'   # CSS to compare against
remove_common_classes(source_css_path, compare_css_path)
