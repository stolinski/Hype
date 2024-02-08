// import { html, raw } from "hono/html";
import { htmxMiddleware } from "@hype/htmx_hono_middleware";
import { Hono } from "hono";
import { post_router, router } from "./router";

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
  const app = new Hono();
  app.use("*", htmxMiddleware());
  app.use("*", async (c, next) => {
    c.theme_root = theme_root;
    c.config = config;
    await next();
  });
  app.get("*", (c) => {
    return router(c);
  });
  app.post("*", (c) => {
    return post_router(c);
  });

  console.log(
    `📸 Hype is hyped up and running super fast at http://${app.server?.hostname}:${app.server?.port}`
  );
  return app;
}
