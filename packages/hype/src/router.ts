// Hi! Lots of naive code here.
// I'm sure this will change quite a bit.
import { createSignal } from "./state/signal";
import { PAGES_ROOT_PATH } from "./utils/file";
import { get_file_extension } from "./utils/get_file_extension";
import { route_process_to_array } from "./utils/route_process_to_array";
import { transform_markdown } from "./utils/transform_markdown";
// TODO: Folder nesting for layout.ts?

type FileType = "md" | "html" | "ts";

type RouterComponent = {
	file_type: FileType;
	module: any;
};

async function get_component(import_url: string): Promise<RouterComponent> {
	try {
		const module = await import(import_url);
		const file_type: FileType = get_file_extension(import_url) as FileType;

		return {
			file_type,
			module,
		};
	} catch (e) {
		console.log(e);
		throw new Error("Component not found");
	}
}


const bun_router = new Bun.FileSystemRouter({
	style: "nextjs",
	dir: PAGES_ROOT_PATH,
	fileExtensions: [".ts", ".md", ".html"],
});

const routes = route_process_to_array(bun_router.routes);
export const routes_sig = createSignal(routes);

// TODO: these types will need to get figured out once the api is done.
export const router = async ({
	request,
	theme_root,
	config,
	hx,
	html,
	body,
	...rest
}) => {
	const httpVerb = request.method.toLowerCase();

	const url = new URL(request.url);
	const pathname = url.pathname;
	const path_match = bun_router.match(pathname);

	if (path_match) {
		const import_url = `${PAGES_ROOT_PATH}/${path_match.src}`;

		const { file_type, module } = await get_component(import_url);

		if (file_type === "md") {
			const markdown = await Bun.file(import_url).text();
			const html = transform_markdown(markdown);
			if (hx.request) {
				return html;
			}
			return theme_root({ children: html, ...rest, routes, config });
		}

		if (file_type === "html") {
			const html = await Bun.file(import_url).text();
			if (hx.request) {
				return html;
			}
			return theme_root({ children: html, routes, config });
		}

		if (file_type === "ts") {
			if (httpVerb === "get") {
				const page = await module.default({ routes, config });
				if (hx.request) {
					return page;
				}
				// TODO need to finalize or organize component args
				const complete_html = await theme_root({
					children: page,
					routes,
					config,
				});
				return html(complete_html);
			}
			if (httpVerb === "post") {
				return module?.post({ request, routes, config, body });
			}
		}
	}
	return "404 - Page not found";
};
