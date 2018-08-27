const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ['env', 'react', 'stage-0'],
              plugins: ['react-html-attrs', "transform-class-properties", "transform-decorators-legacy"],
              ignore: ['/node_modules/']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src/foundation'),
      path.resolve(__dirname, './src/component')
    ]
  },
  output: {
    path: path.join(__dirname, '/static'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './static',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};