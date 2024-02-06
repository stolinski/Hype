import { db } from "$/data/init";
import { recipes } from "$/data/schema";
import { html } from "@hype/hype";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

function sanitizeHtmlInput(html: string) {
	return DOMPurify.sanitize(html, { ALLOWED_TAGS: [""] });
}

// TODO would love someone to help with the types here.
export async function post({ request, body }) {
	console.log("body", body);
	try {
		const name = sanitizeHtmlInput(body.name);
		const added_recipe = await db
			.insert(recipes)
			.values({
				name,
			})
			.returning();
		return html` <li>${added_recipe[0].name}</li> `;
	} catch (e) {
		console.log("e", e);
		return "fail";
	}
}
