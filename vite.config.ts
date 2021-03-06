import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@": resolve("src"),
            comps: resolve("src/components"),
            store: resolve("src/store"),
            views: resolve("src/views"),
        }
    }
})
