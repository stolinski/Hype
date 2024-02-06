import Database from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from "./schema";

export const sqlite = new Database("./database/sqlite.db", {
	create: true,
});

// We should attempt to run migrations here?

export const db = drizzle(sqlite, { schema });
