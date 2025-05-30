import {resolve} from "path"
import {defineConfig} from "vite";

export default defineConfig({
    build:{
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            name: 'service-notify-client',
            fileName: 'index',
            formats: ['es']
        },
        outDir: 'E:/server/resources/service-notify/client',
        rollupOptions: {
            external: ["alt-client", "natives"]
        }
    }
})