'use strict';

const express = require('express');
const cors = require('cors');
const multer = require("multer");

// require and use "multer"...

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
const upload = multer({dest: "uploads/"});

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) =>{
  console.log(req.file);
  res.json({"name": req.file.originalname, "type": req.file.mimetype, "size": req.file.size});
});
