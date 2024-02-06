function getCommonRoutes(allRoutes, selectedRoutes) {
	// Flatten the first array
	const flattenedRoutes = allRoutes.flat();

	// Filter the second array based on the flattened first array
	return selectedRoutes.filter((route) => flattenedRoutes.includes(route));
}

export function route_process_to_array(routes) {
	const result = [];
	const nestedRoutes = {};

	// Separate nested routes and identify top-level routes
	for (const route in routes) {
		const parts = route.split("/");
		const basePath = "/" + parts[1];

		if (parts.length > 2 && !nestedRoutes[basePath]) {
			// Initialize array for nested routes
			nestedRoutes[basePath] = [];
		}

		if (parts.length > 2) {
			// Add nested routes to their respective array
			nestedRoutes[basePath].push(route);
		} else {
			// Directly add top-level routes and the root route
			result.push(route);
		}
	}

	// Add nested routes arrays after their corresponding top-level route
	for (const baseRoute in nestedRoutes) {
		const index = result.indexOf(baseRoute);
		if (index !== -1) {
			result.splice(index + 1, 0, nestedRoutes[baseRoute]);
		}
	}

	return result;
}
