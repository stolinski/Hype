import type { Context } from "hono";

type HxSwap =
  | "innerHTML"
  | "outerHTML"
  | "beforebegin"
  | "afterbegin"
  | "beforeend"
  | "afterend"
  | "delete"
  | "none";

interface HXProperties {
  request: boolean;
  boosted: boolean;
  historyRestoreRequest: boolean;
  currentURL: string;
  prompt: string;
  target: string;
  triggerName: string;
  trigger: string;
  // Add other properties and methods as needed...
  setLocation: (url: string) => void;
  // Continue defining other properties and methods...
  isHTMX: () => boolean;
  stopPolling: () => void;
}

declare module "hono" {
  interface Context {
    htmx: HXProperties;
  }
}

// Define a middleware to enhance the context with HTMX properties
export const htmxMiddleware = () => async (c: Context, next: Function) => {
  // Enhance context with HTMX specific properties and methods
  c.htmx = {
    request: c.req.header("hx-request") === "true",
    boosted: c.req.header("hx-boosted") === "true",
    historyRestoreRequest:
      c.req.header("hx-history-restore-request") === "true",
    currentURL: c.req.header("hx-current-url") ?? "",
    prompt: c.req.header("hx-prompt") ?? "",
    target: c.req.header("hx-target") ?? "",
    triggerName: c.req.header("hx-trigger-name") ?? "",
    trigger: c.req.header("hx-trigger") ?? "",
    // get isHTMX() {
    //   return (
    //     headers("hx-request") === "true" || headers("hx-boosted") === "true"
    //   );
    // },
    // stopPolling: () => (c.status = 286),
  };

  await next();
};
