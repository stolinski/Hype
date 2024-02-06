![Hype Logo](./public/hype.png)

# Hype

Demo: https://hype.tolin.ski/

Take a look. It's nothing special yet, but it has potential.

## What's going on here?

Hype is a meta framework for easily and quickly building hyperfast websites and apps with HTMX & Bun.

## What is this repo?

This repo is currently both a demo and the platform itself. The platform will eventually evolve into just packages and the demo will move elsewhere.

### What's in the box?

This is trying to be a battery buddy of a framework. It holds your batteries. It's batteries included.

🔋 So what are those batteries

- ✅ Server Routing Via ElysiaJS
- ✅ Database & ORM via Drizzle (sqlite easy ootb)
- ✅ HTML & JavaScript as template engine
- ✅ File based routing without pain
- ✅ Browser live reload
- ✅ Markdown File Routes
- ✅ HTML File Routes
- ⌛ Animations
- ⌛ A legit default template with easy mods and overrides
- ⌛ Easy Tailwind / Uno
- ⌛ Layouts
- ⌛ Auth
- ⌛ Form Generation
- ⌛ Admin
- ⌛ Swapable Templating Langs

- ⌛ Client side helpers
- ⌛ Scoped CSS

### What?

Zero build, extreme speeds, no OOTB client side framework JS. Trying to keep deps super low here.

#### The tech behind this

- Elysia,
- HTMX
- HTML
- Bun
- Drizzle
- SQLite
- Biome

Poke around but just know that nothing is final.

### What is this not doing?

- ❌ Native Mobile

### Why?

HTMX is sick and there are a ton of competing stacks and frameworks to use it in. This is trying to be THE JavaScript based way to write HTMX apps with batteries included. Meteor was my favorite framework, so just keep that in mind.

### Interesting Features

Since args don't rerun components, we can pass a ton of props into them like the entire request and context info. Think Locals for svelte but in your component.

## Want to help?

Let's chat https://discord.gg/7eSBjEQMYq

### Code Highlighting

Install: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html

### Emmet

```
  "emmet.includeLanguages": {
    "typescript": "html",
    "javascript": "html"
  },
```
