import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@features": path.resolve("./src/features"),
      "@styles": path.resolve("./src/styles"),
      "@utils": path.resolve("./src/utils"),
      "@hooks": path.resolve("./src/hooks"),
    },
  },
});
