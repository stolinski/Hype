/**
 * This code was lovingly borrowed from Jim Nielsen's blog post - Scott
 * Tagged template literal function for coercing certain values to what
 * we would expcted for a more JSX-like syntax.
 *
 * For values that we don't want to coerce, we just skip outputing them
 * Example:
 *   `class="${variable}"`
 * If the value of my variable was one of these types I don't want
 * JavaScript to coerce, then I'd get this:
 *   'class=""'
 *
 * https://blog.jim-nielsen.com/2019/jsx-like-syntax-for-tagged-template-literals/
 */
export default function html(strings: TemplateStringsArray, ...values: any[]) {
  let out = "";
  strings.forEach((string, i) => {
    const value = values[i];

    // Array - Join to string and output with value
    if (Array.isArray(value)) {
      out += string + value.join("");
    }
    // String - Output with value
    else if (typeof value === "string") {
      out += string + value;
    }
    // Number - Coerce to string and output with value
    // This would happen anyway, but for clarity's sake on what's happening here
    else if (typeof value === "number") {
      out += string + String(value);
    }
    // object, undefined, null, boolean - Don't output a value.
    else {
      out += string;
    }
  });
  return out;
}
