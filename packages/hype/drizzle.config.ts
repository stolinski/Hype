import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./.hype/data/schema.ts",
	out: "./database",
	driver: "better-sqlite",
	dbCredentials: {
		url: "./hype/database/sqlite.db",
	},
});
