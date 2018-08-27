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
      path.resolve(__dirname, './node_modules')
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
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