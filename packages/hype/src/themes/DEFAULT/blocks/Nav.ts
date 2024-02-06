import html from "../../../html";
import { routes_sig } from "../../../router";

// TODO wizard that grabs the default templates from the
// Components can be strings or functions, anon or named.
// heck, even arrow functions if you'd like.

function getCommonRoutes(allRoutes: string[], selectedRoutes: string[]) {
	// Flatten the first array
	const flattenedRoutes = allRoutes.flat();

	// Filter the second array based on the flattened first array
	return selectedRoutes.filter((route) => flattenedRoutes.includes(route));
}

export function Nav({ options }) {
	const c = routes_sig.getValue();
	const common_routes = getCommonRoutes(c, options.links);

	const links = common_routes.map((route) => {
		if (Array.isArray(route)) {
		} else {
			return html`
					<li>
						<a href="${route}">${route === "/" ? "Home" : route.substring(1)}</a>
					</li>
				`;
		}
	});

	return html`
		<nav hx-boost="true" hx-target="#main" hx-swap="innerHTML transition:true show:no-scroll" >
			<ul>
				${links}
			</ul>
		</nav>

	<style>
    header nav {
      a {
				text-decoration: none;
        color: var(--black)
      }
			ul {
				display: flex;
				gap: 20px;
				padding: 0;
				margin: 0;
				list-style-type: none;
				li {
					margin: 0;
				}
			}
    }
  </style>
	`;
}
