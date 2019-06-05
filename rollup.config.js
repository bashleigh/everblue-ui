/* eslint-disable */

import typescript from 'rollup-plugin-typescript2'
import minify from 'rollup-plugin-babel-minify'
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      minify()
    ],
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }]
  }
]
