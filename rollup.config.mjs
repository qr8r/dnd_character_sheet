import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',

  output: {
    sourcemap: true,
    file: 'public/index.js',
    format: 'iife'
  },

  plugins: [
    nodeResolve({
      exportConditions: ['node']
    }),
    typescript(),
  ]
}
