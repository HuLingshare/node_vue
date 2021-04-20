import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons';
import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      // /#/xxxx => types/xxxx
      {
        find: /#\//,
        replacement: pathResolve('types') + '/',
      },
      // ['@vue/compiler-sfc', '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'],
    ],
  },
  plugins: [
    vue(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})