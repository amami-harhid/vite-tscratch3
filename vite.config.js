import { resolve } from 'path'
import { defineConfig } from 'vite'
import glob from 'glob'
import topLevelAwait from 'vite-plugin-top-level-await';

const root = resolve(__dirname, 'src')
const entries = glob.sync('./src/**/index.html');
const targetDir = []
for(const entry of entries) {
    const directory = entry.replace('./src/', '').replace(/\/index\.html$/,'')
    targetDir.push(directory)
}
const rollupOpsionsInput = {}
for(const target of targetDir){
    rollupOpsionsInput[target] = resolve(root, target, 'index.html')
}

const outDir = resolve(__dirname, 'dist');
export default defineConfig({
    plugins: [topLevelAwait()],
    build: {
        target: "esnext",
        outDir,
        rollupOptions: {
            input: rollupOpsionsInput,
        },
    },
    esbuild: {
        supported: {
            'top-level-await': true
        },
        target: "esnext"
    },
    optimizeDeps:{
        esbuildOptions: {
            target: "esnext",
        }
    },
    root,
})