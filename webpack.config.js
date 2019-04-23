// prettier-ignore
const path = require('path');

module.exports = {
  entry: './src/components/index.ts',
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    }
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.story\.tsx$).*\.tsx$/,
        use: 'ts-loader',
        include: ['./src/components']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'everblue-ui.js'
  }
}
