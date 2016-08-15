const ENV_TEST = process.env.NODE_ENV === 'test';

var argv = require('yargs').argv;
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack Config
var webpackConfig = {
  // publicPath: './src/assets',
  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap'],
        include: [ path.resolve(__dirname, './src/assets') ]
      },
      {
        test: /\.scss$/,
        loaders: ['css', 'resolve-url', 'sass?sourceMap'],
        exclude: [ path.resolve(__dirname, './src/assets') ]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: ['file-loader?name=img/[hash].[ext]', 'image-webpack']
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  imageWebpackLoader: {
    root: path.resolve(__dirname, './src/assets'),
    progressive:true,
    optimizationLevel: 7,
    interlaced: false
  }
  ,
  htmlLoader: {
    root: path.resolve(__dirname, './src/assets'),
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [
      [/#/, /(?:)/],
      [/\*/, /(?:)/],
      [/\[?\(?/, /(?:)/]
    ],
    customAttrAssign: [/\)?\]?=/]
  }
  // ,
  // resolveUrlLoader: {
  //   root: path.resolve(__dirname, './src/assets')
  // }
};

if (!ENV_TEST) {
  webpackConfig.entry = {
    'polyfills': './src/polyfills.browser.ts',
    'vendor':    './src/vendor.browser.ts',
    'main':      './src/main.browser.ts',
  };

  webpackConfig.output = {
    path: './dist',
  };

  webpackConfig.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      title: 'Test',
      base: argv.base || '/',
      template: 'src/index.ejs',
      chunksSortMode: 'dependency'
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   mangle: false
    // })
  ];
}

// Webpack Defaults from angular class
var defaultConfig = {
  devtool: 'cheap-module-source-map',
  cache: true,
  debug: true,
  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },


  resolve: {
    // alias: {
    //   images: path.join(__dirname, 'src/assets/images/'),
    // },
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: 1,
    crypto: 'empty',
    module: 0,
    Buffer: 0,
    clearImmediate: 0,
    setImmediate: 0
  }
};

var webpackMerge = require('webpack-merge');
module.exports = webpackMerge(defaultConfig, webpackConfig);
