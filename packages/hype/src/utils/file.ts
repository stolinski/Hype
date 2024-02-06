import path from "path";

console.log("loading file utils template");

export const PAGES_LOCAL_PATH = "./src/pages";
export const PAGES_ROOT_PATH = path.resolve(process.cwd(), PAGES_LOCAL_PATH);
