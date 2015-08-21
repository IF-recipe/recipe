var fs = require('fs');
var multer  = require('multer')
var upload = multer({dest : "uploads/"})
var express = require('express');
var router = express.Router();

router.post('/photo/recipe/upload',upload.single('files'), function (req, res, next) {
    console.log("recipe photoUload -----req.url : " + req.url);
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.file);
    console.log(req.files);
    console.log("------------req end");

})

router.get("/photo/recipe/download", function(req, res, nex){
    var stream = fs.createReadStream(__dirname + "/../uploads/b566fef04e0f557cc41573f97062d4f8");
    stream.pipe(res);
});

router.all('/photo/profile/upload', function(req, res, next) {
    console.log("profile photoUload -----");
    console.log(req.query);
});
module.exports = router;