import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import { htmx } from "elysia-htmx";
import { router } from "./router";

type HypeConfig = {
	APP_NAME: string;
	OG_IMAGE: string;
	SITE_DESCRIPTION: string;
	THEME: string;
};

// Just experimenting with using jsdoc to get docs out of the code.
/**
 * This function initializes an Hype app with the provided configuration, attaches necessary plugins, sets up a router, and starts the server.
 * It then logs a message with the server details.
 * ph
 * @param {HypeConfig} config - The configuration object for the Elysia app
 * @return {void}
 */
export async function getHype({ config }: { config: HypeConfig }) {
	// Run on initialization
	// Grabs all exports for theme.
	const { default: theme_root } = await import(`./themes/${config.THEME}/html`);

	function main() {
		const app = new Elysia()
			.use(staticPlugin())
			.use(htmx())
			.use(html())
			.decorate("config", config)
			.decorate("theme_root", theme_root)
			.all("/*", router)
			.listen(4000);

		console.log(
			`📸 Hype is hyped up and running super fast at http://${app.server?.hostname}:${app.server?.port}`,
		);
	}

	main();
}
