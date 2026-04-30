import { resolve } from "path";
import { readdirSync } from "fs";

const input = Object.fromEntries(
  readdirSync(__dirname)
    .filter((f) => f.endsWith(".html"))
    .map((f) => [f.replace(".html", ""), resolve(__dirname, f)])
);

export default {
  base: "/temp-allmaps-leaflet/",
  build: { rollupOptions: { input } },
};
