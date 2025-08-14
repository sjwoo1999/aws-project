import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: [],
    globals: true,
    css: true,
    root: resolve(__dirname),
  },
});


