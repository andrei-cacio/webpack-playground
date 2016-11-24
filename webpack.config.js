const webpack = require('webpack');
const argv = require('optimist').argv;
const configDev = require('webpack.dev.config');

if (argv.p) {
	console.log('production config');
} else {

}

module.exports = {
	entry: {
		main: './index.js'
	},
	output: {
		filename: '[name]-bundle.js',
		publicPath: '/assets/',
		path: './dist'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
			        query: {
					presets: ['es2015']
				}	
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
				exclude: /node_modules/
			},
			{
				test: /.(ttf|eot|svg|woff|woff2).*$/,
				loader: 'file-loader',
				exclude: /node_modules/
			},
			{
				test: /.jpg$/,
				loader: 'url-loader?limit=1000'
			},
			{
				test: /.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	devServer: {
		inline: true
	}
}







