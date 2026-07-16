import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/Divine-Call-Taxi/",
  plugins: [react()],
});
