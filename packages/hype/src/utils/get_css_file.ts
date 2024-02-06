export async function read_file(path: string) {
	return await Bun.file(path).text();
}
