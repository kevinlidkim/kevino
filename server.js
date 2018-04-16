const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

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