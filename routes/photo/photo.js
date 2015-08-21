var express = require('express');
var router = express.Router();

var multer  = require('multer');
var upload = multer({dest : "uploads/"});



router.post('/photo/recipe/upload', upload.single('files'), function (req, res, next) {
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