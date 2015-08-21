var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/photo/recipe/dw', function(req, res, next){
    console.log("reciep photo DownLoad ------");

    var stream = fs.createReadStream(__dirname + "/../../uploads/1");
    stream.pipe(res);
});

module.exports = router;