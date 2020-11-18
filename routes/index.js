var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  var PACKAGE_PATH = __dirname + '/../package.json';
  fs.readFile(PACKAGE_PATH, function (err, result) {
    if (err) logger.logError(err);
    else {
      var data = JSON.parse(result);
      res.json({ title: data.description, version: data.version, from: ip });
    }
  })
});


module.exports = router;
