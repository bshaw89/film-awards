const express = require("express");
const http = require("http");
const path = require('path');

// const cors = require('cors');

let port = process.env.PORT || 3001;

const app = express();

// app.use(cors());

app.use(express.static(path.join(__dirname, '..','build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..' ,'build', 'index.html'));
});

const server = http.createServer(app);

if (port === null || port === "") {
  port = 8000;
}
server.listen(port, () => console.log(`Listening on port ${port}`));
