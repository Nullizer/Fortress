// not used
import { Configuration } from 'webpack'

export const mainConfig: Configuration = {
  mode: 'none',
  target: 'electron-main',
  entry: {
    'electron-main': './src/electron-main.ts'
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ]
  }
}

export default mainConfig
