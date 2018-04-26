var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: {
		home: [
			'./src/index.js',
			'./src/styles/app.scss'
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [ 'babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'bundle.css'
						}
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
					{ 
						loader: 'sass-loader',
						options: {
							includePaths: ['./node_modules']
						}
					}
				]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 8192 }
					}
				]
			}
		]
	}
};
