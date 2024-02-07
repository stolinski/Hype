import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, sqlite } from "../src/data/init";

migrate(db, { migrationsFolder: "./database" });
console.log("migrated db");
sqlite.close();
