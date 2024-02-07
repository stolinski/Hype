#!/usr/bin/env bun

import * as p from "@clack/prompts";
import { bold, cyan, grey } from "kleur/colors";
import fs from "node:fs";
import path from "node:path";

let cwd = process.argv[2] || ".";

console.log(grey("...getting hype"));
p.intro("Status: Hype");

if (cwd === ".") {
	const dir = await p.text({
		message: "Where should we create your project?",
		placeholder: "  (hit Enter to use current directory)",
	});

	if (p.isCancel(dir)) process.exit(1);

	if (dir) {
		cwd = dir;
	}
}

if (fs.existsSync(cwd)) {
	if (fs.readdirSync(cwd).length > 0) {
		const force = await p.confirm({
			message: "Directory not empty. Continue?",
			initialValue: false,
		});

		if (force !== true) {
			process.exit(1);
		}
	}
}

// await create(cwd, {
// 	name: path.basename(path.resolve(cwd)),
// 	template: "DEFAULT",
// });

p.outro("Hype Created");

let i = 1;

const relative = path.relative(process.cwd(), cwd);
if (relative !== "") {
	console.log(`  ${i++}: ${bold(cyan(`cd ${relative}`))}`);
}

console.log(`  ${i++}: ${bold(cyan("bun install"))}`);
console.log(
	`  ${i++}: ${bold(
		cyan('git init && git add -A && git commit -m "Initial commit"'),
	)} (optional)`,
);
console.log(`  ${i++}: ${bold(cyan("bun dev"))}`);

console.log(`\nTo close the dev server, hit ${bold(cyan("Ctrl-C"))}`);
