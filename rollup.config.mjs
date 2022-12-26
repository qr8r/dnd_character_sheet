import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',

  output: {
    file: 'public/index.js',
    format: 'iife'
  },

  customResolveOptions: {
    moduleDirectory: 'node_modules'
  },

  plugins: [
    resolve({}),
    typescript(),
  ]
}
