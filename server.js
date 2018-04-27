import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const app = express();
const port = 8000;
const compiler = webpack(config);
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, '/dist'));



app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use('/dist', publicPath);

app.get('/api', function(req, res) {
	console.log('api call');
	return res.status(200).json({
		status: 'ok',
		message: 'yo'
	})
})

app.get('*', (req, res) => {
	res.sendFile(indexPath);
})


app.listen(port);
console.log('listening at port ' + port);