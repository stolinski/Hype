import html from "../../html";
import { scripts } from "../../javascripts";
import { get_theme_css_file } from "../../utils/get_theme_css_file";
import { footer } from "./footer";
import { header } from "./header";
import { meta } from "./meta";

export default async ({ children, config }: { children: string }) => {
  const styles = await get_theme_css_file(config.THEME);
  return html`
    <html lang="en">
      <head>
        ${meta({ title: config.APP_NAME })}
        <style>
          ${styles}
        </style>
      </head>
      <body>
        ${header()}
        <div id="main" class="auto-transition">${children}</div>
        ${footer} ${scripts}
      </body>
    </html>
    <style>
      #main {
        display: grid;
        column-gap: 10px;
        grid-template-columns:
          [start l-margin] 10px [l-margin content main] minmax(0, 812px)
          [main-end sidebar] minmax(0, 322px)
          [sidebar content-end r-margin] 10px [r-margin end];
      }

      #main > * {
        grid-column: content / content-end;
      }

      #main .main {
        grid-column: main / main-end;
      }
    </style>
  `;
};
