var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer  = require('multer');
var upload = multer({dest : "uploads/"});


router.get('/photo/recipe/download', function(req, res, next){
    console.log("reciep photo DownLoad ------");

    var stream = fs.createReadStream(__dirname + "/../../uploads/1");
    stream.pipe(res);
});


router.post('/photo/recipe/upload',upload.single('files'), function (req, res, next) {
    console.log("recipe photo Upload -----req.url : " + req.url);
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.file);
    console.log(req.files);
    console.log("------------req end");
    /**
     *  -add Mongo DB insert Query call
     */

})



module.exports = router;