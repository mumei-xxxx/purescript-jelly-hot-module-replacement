import { defineConfig } from "vite";

export default defineConfig({
  root: "./public",
  server: {
    watch: {
      ignored: ["!./public/index.js"],
    },
  },
});
