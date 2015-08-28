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
    /**
     *  -add Mongo DB update Query call
     */
    recipeBiz.updatephotoPath(req.body, req.file,function(data){
        console.log(data);

        res.send(data);
    });

});



module.exports = router;
