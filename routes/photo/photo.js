var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({dest : "uploads/"});
var fs = require('fs');
var recipeBiz = require('../../commonBiz/recipeBiz.js');

router.get('/recipe/download/:photoId', function(req, res, next){
    console.log("reciep photo DownLoad ------>", req.params.photoId);
    var stream = fs.createReadStream(__dirname + "/../../uploads/"+req.params.photoId);
    stream.pipe(res);
});

router.post('/recipe/upload', upload.single('files'), function (req, res, next) {
    console.log("recipe photo Upload -----start req.url : " + req.url);
    console.log(req.body);
    console.log(req.file);
    console.log("------------req end");
    /**
     *  -add Mongo DB update Query call
     */
    recipeBiz.updatephotoPath(req.body, req.file,function(data){
        console.log("-- updatephotoPath -- callback --start");
        console.log(data);
        console.log("-- updatephotoPath -- callback --end");

        res.send(data);
    });
    console.log("recipe photo upload -----end");

});



module.exports = router;
