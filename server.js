var express = require('express')

var port = 3000;
var app = express();

app.get('/test', (req, res) => { res.send("TeStiNg")});

app.listen(port);