const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer  = require('multer');

var router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public','uploads'))
  },
  filename: function (req, file, cb) {
    // console.log(file);
    let fileName = file.originalname;
    let fileParts = end(file.originalname).split('.');
    cb(null, fileName[0] + '-' + Date.now() + '.' + fileName[1])
  }
});

var upload = multer({ storage: storage });

let response = {
  status : 200,
  message : null,
  data : []
};

var sendError = (err,res) => {
  response.status = 501;
  response.message = typeof err === "object" ? err.message : err;
  res.status(501).json(response);
};

router.post('/saveCustomer', upload.single('profileImage'), (req, res) => {
  console.log(req.body);
  response.data = req.body;
});


module.exports = router;
