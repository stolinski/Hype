import { db } from "$/data/init";
import { new_recipes } from "$/theme/forms/new_recipes";
import { html } from "@hype/hype";

export default async () => {
	const data = await db.query.recipes.findMany({});

	const recipes_list = data.map((recipe) => {
		return html`<li>${recipe.name}</li>`;
	});

	return html`
	<h1>Demo App</h1>
	<p class="note"><span class="pill">PROJECT STATUS: Super Early Exploration</span><br />This demo app is intended to show how you might work in Hype to create awesome sites. Expect things to be imperfect</p>
	
	<p>
		<a href="https://github.com/stolinski/Hype">Check out the source</a>
	</p>

	<div class="box main">
		<h2>Hi</h2>
		<p>Try this form, it adds to a database. The delete button deletes it. This is just html forms and htmx progressively enhancing that. Keep in mind these are being stored in a database and the html is being returned and inserted into the dom. Check the network panel of your devtools.</p>
		
		${new_recipes}

		<ul id="list">
			${recipes_list}
		</ul>

		<form hx-post="/recipes/delete" hx-target="#list">
			<button>Delete All</button>
		</form>
	</div>

	<style>
		


	</style>
	`;
};
