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
        outDir: 'A:/Alone/PROJECTS/GTA5/LAtruckers/server/resources/ServiceNotify/client',
        rollupOptions: {
            external: ["alt-client", "natives"]
        }
    }
})