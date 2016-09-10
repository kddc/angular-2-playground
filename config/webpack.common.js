var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},

	resolve: {
		// root: [ helpers.root('src') ],
		extensions: ['', '.js', '.ts']
	},

	module: {
		loaders: [
			{
	      test: /\.ts$/,
	      loaders: ['ts-loader', 'angular2-template-loader'],
			},
	    {
	      test: /\.html$/,
	      loader: 'html'
	    },
	    {
	      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
	      loader: 'file?name=assets/[name].[hash].[ext]'
	    },
			{
        test: /\.scss$/,
				include: [ helpers.root('src', 'app') ],
        loaders: ['raw', 'sass']
			},
			{
        test: /\.scss$/,
        exclude: [ helpers.root('src', 'app') ],
				loader: ExtractTextPlugin.extract({
					notExtractLoader: "style-loader",
					loader: 'css!resolve-url!sass?sourceMap'
				})
      }
		]
	},

	imageWebpackLoader: {
    root: helpers.root('src', 'assets'),
    progressive:true,
    optimizationLevel: 7,
    interlaced: false
  },

	htmlLoader: {
    root: helpers.root('src', 'assets'),
    minimize: true,
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [
      [/#/, /(?:)/],
      [/\*/, /(?:)/],
      [/\[?\(?/, /(?:)/]
    ],
    customAttrAssign: [/\)?\]?=/]
  },

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			base: "/",
			favicon: 'src/favicon.ico',
			template: 'src/index.ejs'
		})
	]
};
