import { Configuration } from 'webpack'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const isProd = process.env.NODE_ENV === 'production'

export const commonConfig: Configuration = {
  target: 'electron-renderer',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[name]-[local]_[hash:base64:4]',
            minimize: isProd,
          }
        }, {
          loader: 'sass-loader',
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
}
