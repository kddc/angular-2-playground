var helpers = require('./helpers');

module.exports = {
	devtool: 'inline-source-map',

	resolve: {
		extensions: ['', '.ts', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['ts', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html'

			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'null'
			},
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				loader: 'null'
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw'
			},
			{
        test: /\.scss$/,
				exclude: helpers.root('src', 'app'),
        loaders: ['raw', 'sass']
			},
			{
        test: /\.scss$/,
				include: helpers.root('src', 'app'),
				loader: 'null'
      }
		]
	}
}