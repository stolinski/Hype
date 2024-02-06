import html from "../../html";

export const meta = ({ title }: { title: string }) =>
	html`<title>${title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://unpkg.com/htmx.org@latest"></script>`;
