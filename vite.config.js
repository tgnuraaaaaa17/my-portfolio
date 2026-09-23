import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ВАЖНО: замени "my-portfolio" на точное название твоего GitHub-репозитория
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
});
