const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var api = require('./api');

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', api);
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// app.set('port', port);
// var server = http.createServer(app);

app.listen(port, () => {
  console.log(`Server is Up & Running on port ${port}`);
});
