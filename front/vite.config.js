import { defineConfig } from "vite";
import path from "node:path";

const prod = process.env.NODE_ENV === "production";
const folderName = path.basename( process.cwd() );

export default defineConfig( {
    root:"src/",
    base:prod ? `/${folderName}/`: "/",
    mode: prod ? "production" : "development",
    publicDir: "../public",
    plugins: [],
    server: { port: 1234 },
    build: {
        outDir:"../dist"
    }
})