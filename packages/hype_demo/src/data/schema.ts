import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const recipes = sqliteTable("recipes", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name"),
  last_date_made: text("last_date_made"),
});

export const weeks = sqliteTable("weeks", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  last_date_made: text("last_date_made").default(sql`CURRENT_DATE`),
  date_of_month: text("date_of_month"),
});

export const recipes_to_weeks = sqliteTable("recipes_to_weeks", {
  recipes_id: integer("recipes_id")
    .notNull()
    .references(() => recipes.id),
  weeks_id: integer("weeks_id")
    .notNull()
    .references(() => weeks.id),
});
