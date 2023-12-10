import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    build: {
      outDir: "build",
      assetsDir: "app",
    },
    resolve: {
      alias: {
        src: "/src",
      },
    },
    server: {
      port: 3000,
      proxy: {
        "/api/SpectrumWS": {
          target: "wss://your-domain.net",
          changeOrigin: true,
          ws: true,
        },
        "/api": {
          target:
            "https://your-domain.net",
          changeOrigin: true,
          secure: false,
          ws: true,
        },
      },
    },
    esbuild: {
      drop: command === "build" ? ["console"] : undefined,
    },
  };
});
