import { resolve } from 'path'
import { defineConfig } from 'vite'
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist');
export default defineConfig({
    build: {
        outDir,
        rollupOptions: {
            input: {
                test02: resolve(root, 'test02', 'index.html'),
            },
        },
        target: "es2022"
    },
    esbuild: {
        target: "es2022"
    },
    optimizeDeps:{
        esbuildOptions: {
            target: "es2022",
        }
    },
    root,
})