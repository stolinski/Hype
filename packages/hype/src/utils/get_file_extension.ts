export function get_file_extension(path: string) {
	const parts = path.split(".");
	const part = parts.pop();
	return part;
}
