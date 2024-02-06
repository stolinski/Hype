import { join } from 'path';
import { read_file } from "./get_css_file";


const location = import.meta.dir;

export async function get_theme_css_file(THEME_NAME: string) {
	let styles = "";
	try {
		const path = `../themes/${THEME_NAME}/style.css`
		const full = join(location, path);
		styles = await read_file(full);
	} catch (e) {
		console.log(e);
	}
	return styles;
}
