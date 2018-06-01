var express = require('express');

const port = 1234;

var args = process.argv.slice(2);

var public = args[0] || '.';

var app = express();

app.use('/', express.static(public));

app.listen(port, (err) => {
	if (err) return console.log(err);

	console.log('server is listening on ' + port);
});