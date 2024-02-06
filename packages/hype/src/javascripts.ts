import { IS_DEV } from "./app";
import html from "./html";

export const scripts = IS_DEV
	? html`
<script type="module">
	const chat = new WebSocket('ws://localhost:8080/chat');
	chat.addEventListener("open", (event) => {
		chat.send("client webhook loaded");
	});
	// Add other event listeners as needed
	chat.addEventListener("message", (event) => {
		const message = event.data;
		if (event.data === "reload") {
			location.reload();
		}
	});

	chat.addEventListener("error", (event) => {
		console.error("Webchat error:", event);
	});

	chat.addEventListener("close", (event) => {
		console.log("Webchat connection closed:", event);
	});

	document.body.addEventListener('htmx:afterSwap', function() {
		console.log('Content swapped, potentially indicating a route change.');
		// Perform any post-navigation logic here
		// This might be useful 🤔
	});

</script>
`
	: "";
