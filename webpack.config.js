module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/assets/',
		path: './dist'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /.(css|scss)$/,
			loader: 'style-loader!css-loader!sass-loader',
			exclude: /node_modules/
		},
		{
			test: /.(png|jpg|ttf|eot|svg|woff|woff2).*$/,
			loader: 'url-loader?limit=17000',
			exclude: /node_modules/	
		}]
	},
	devServer: {
		inline: true
	}
}