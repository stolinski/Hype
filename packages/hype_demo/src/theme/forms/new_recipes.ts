import { html } from "@hype/hype";

// THIS IS INTERESTING
// I NEED TO FIGURE OUT HOW TO FILTER THE COLUMNS IN THE SCHEMA
// const data_types = {};
// for (const [column_name, column_info] of Object.entries(
//   recipes[Symbol.for("drizzle:Columns")]
// )) {
//   data_types[column_name] = column_info.dataType;
// }
// console.log("data_types", data_types);

export const new_recipes = html`
	<form hx-post="/recipes" hx-target="#list" hx-swap="beforeend">
    <input type="text" name="name" id="name" />
    <button>Add</button>
  </form>
`;
