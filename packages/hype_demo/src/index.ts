import { getHype } from "@hype/hype";
import { EventEmitter } from "events";
import { WebSocketServer } from "ws";
import config from "../hype.toml";

await getHype({ config });

// TODO move to library code
// state.ts
declare global {
	var wss: WebSocketServer | undefined;
	var emitter: EventEmitter | undefined;
}

// Function to add event listeners to a WebSocket client
function addClientEventListeners(ws) {
	ws.on("message", (message) => {
		console.log("Received message: " + message);
	});

	ws.on("close", () => {
		console.log("Client disconnected");
	});
}

globalThis.wss ??= new WebSocketServer({ port: 8080 });
globalThis.emitter ??= new EventEmitter();
if (globalThis.emitter.listenerCount("reload") === 0) {
	globalThis.emitter.on("reload", () => {
		globalThis?.wss?.clients.forEach((client) => {
			if (client.readyState === WebSocket.OPEN) {
				client.send("reload");
			}
		});
	});
}

if (!globalThis.wss.listenerCount("connection")) {
	globalThis.wss.on("connection", (ws) => {
		console.log("Client connected");
		addClientEventListeners(ws);
	});
}

globalThis?.emitter?.emit("reload");
