import { CleanWebpackPlugin  } from 'clean-webpack-plugin';
import merge from 'webpack-merge'; 
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'; 


import getCommonConfig from './webpack.common';
import { loadProdCss } from './css';

export default () => {
  const generationTime = Math.round(((new Date()).getTime() / 1000) | 0);
  return merge(getCommonConfig(generationTime), {
    mode: 'production',
    entry: './scripts/webpack/widget-prod.js',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        openAnalyzer: false,
        generateStatsFile: true,
      }),
    ],
  },
  loadProdCss({ generationTime }),
  );
}