import { db } from "$/data/init";
import { recipes } from "$/data/schema";
import { html } from "@hype/hype";

export async function post({ request, body }: { request: Request }) {
  try {
    await db.delete(recipes);
    return html``;
  } catch (e) {
    console.log("e", e);
    return "fail";
  }
}
