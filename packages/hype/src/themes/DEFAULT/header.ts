import html from "../../html";
import { Nav } from "./blocks/Nav";

// TODO cli script that duplicates and overrides default templates

export const header = () => html`
  <header>
    <div class="logo" hx-boost="true" hx-target="#main">
			<a href="/">
				<svg
					width="326"
					height="79"
					viewBox="0 0 326 79"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M253.382 78.81L268.7 0H325.31L321.98 17.205H284.573L282.02 30.414H312.323L309.104 47.064H278.801L276.026 61.605H313.877L310.547 78.81H253.382Z"
						fill="var(--black)"
					/>
					<path
						d="M224.055 0C243.258 0 253.026 10.323 253.026 25.53C253.026 43.401 240.261 53.724 220.392 53.724H204.519L199.635 78.81H180.321L195.639 0H224.055ZM207.849 36.741H219.837C228.717 36.741 233.379 32.523 233.379 26.196C233.379 20.868 229.716 17.094 222.723 17.094H211.623L207.849 36.741Z"
						fill="var(--black)"
					/>
					<path
						d="M111.797 0H132.443L143.321 28.749L165.299 0H187.943L150.092 48.174L144.098 78.81H124.784L130.778 47.952L111.797 0Z"
						fill="var(--black)"
					/>
					<path
						d="M34.632 0L28.638 30.636H78.83L84.824 0H104.138L88.82 78.81H69.506L75.5 47.73H25.308L19.314 78.81H0L15.318 0H34.632Z"
						fill="var(--black)"
					/>
				</svg>
			</div>
		</a>

		${Nav({
			options: {
				links: ["/", "/about", "/markdown", "/html"],
			},
		})}
		
  </header>

  <style>
    header {
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px var(--orange);
    }
    .logo {
      border-radius: 10px;
			z-index: 5;
    }
    .logo svg {
      display: block;
    }

    header nav {
			padding-right: var(--vspace);
      display: flex;
      gap: 20px;

			width: 100%;
			justify-content: flex-end;
			background: var(--bg);
			padding: 20px;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: var(--black);
      }
    }
  </style>
`;
