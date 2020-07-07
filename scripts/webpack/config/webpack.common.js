import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin } from 'webpack';

import { BUILD_DIRECTORY, SOURCE_DIRECTORY } from '../constants';

export default (generationTime = 0) => {
  const { NODE_ENV } = process.env;
  // const generationTime = Math.round((now.getTime() / 1000) | 0);
  // const IS_DEV = NODE_ENV === 'development';

  return {
    mode: 'none',
    // entry: './scripts/webpack/widget-prod.js',
    output: {
      path: BUILD_DIRECTORY,
      // filename: 'js/[name].[chunkhash].[id].js',
      filename: 'widget.js',
      chunkFilename: '[name].[chunkhash].[id].js',
      publicPath: './',
      hashDigestLength: 6,
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //     minSize: 30000,
    //     automaticNameDelimiter: '.',
    //   },
    //   // runtimeChunk: true,
    // },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // query: {compact: false}
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[hash:6].[ext]',
              },
            },
          ],
        },
      ]
    },
    plugins: [
      new DefinePlugin({
        __ENV__: JSON.stringify(NODE_ENV),
        __DEV__: NODE_ENV === 'development',
        __PROD__: NODE_ENV === 'production',
        GENERATION_TIME: JSON.stringify(generationTime),
      }),
      new HtmlWebpackPlugin({
        inject: false,
        template: `${SOURCE_DIRECTORY}/index.ejs`,
        filename: 'index.html',
      }),
    ],
  }
}