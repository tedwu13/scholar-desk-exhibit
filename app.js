var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('index.html' , { root : __dirname});
})

app.listen(port);
console.log("App listening on port " + port);