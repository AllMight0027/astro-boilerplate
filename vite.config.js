import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  environment: "jsdom",
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    // hey! 👋 over here
    globals: true,
    setupFiles: ["./testSetup.js", "./vitest.config.ts"], // assuming the test folder is in the root of our project
  },
  globals: true,
});
