var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.json({ status: 200 });
});

app.listen(20000);