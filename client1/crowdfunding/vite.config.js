import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill'


// https://vitejs.dev/config/
export default defineConfig({

  // optimizeDeps: {
  //   esbuildOptions: {
  // plugins: [react(), NodeModulesPolyfills(),
  //   GlobalsPolyfills({
  //     process: true,
  //     buffer: true,
  //   }),],

  resolve: {
    
    alias: [
      {
        find: 'web3',
        replacement: 'web3/dist/web3.min.js',
      },
    ],

    
  },

  define: {
    global: "globalThis",
    "process.env": {},
  },
}

  // }
// }
);