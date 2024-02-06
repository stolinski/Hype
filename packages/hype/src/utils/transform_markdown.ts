import SimpleMarkdown from "simple-markdown";

export function transform_markdown(md_file_string: string) {
  return SimpleMarkdown.markdownToHtml(md_file_string);
}
