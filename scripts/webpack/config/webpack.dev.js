import merge from 'webpack-merge';

import getCommonConfig from './webpack.common';
import { loadDevCss } from './css';

export default () => {
  return merge(getCommonConfig(), {
    mode: 'development',
    entry: './scripts/webpack/widget-local.js',
    devtool: 'cheap-module-eval-source-map',

    plugins: [
      //
    ],
  },
  loadDevCss(),
  );
}