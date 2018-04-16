import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const app = express();
const port = 8000;
const compiler = webpack(config);
const index_path = path.join(__dirname, 'index.html');
const public_path = express.static(path.join(__dirname, '/dist'));



app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.use('/dist', public_path);
app.get('/', function(req, res) {
	res.sendFile(index_path);
})

app.listen(port);
console.log('listening at port ' + port);