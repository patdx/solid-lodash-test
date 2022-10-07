import solid from "solid-start/vite";
import { defineConfig } from "vite";
import { writeFileSync } from "fs";

export default defineConfig({
  plugins: [solid()],
});
