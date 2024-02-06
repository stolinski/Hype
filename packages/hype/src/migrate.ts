import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db, sqlite } from "./DEMOsrc/data/init";

migrate(db, { migrationsFolder: "./.hype/database" });
console.log("migrated db");
sqlite.close();
