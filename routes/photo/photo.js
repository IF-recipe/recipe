var fs = require('fs');
var multer  = require('multer')
var upload = multer()
var express = require('express');
var router = express.Router();

router.post('/photo/recipe/upload',upload.single('files'), function (req, res, next) {
    console.log("recipe photoUload -----req.url : " + req.url);
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    console.log(req.files);
    console.log("------------req end");
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/tmp/my-uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
        }
    })

})


    //var form = new multiparty.Form();
    //
    //
    //form.parse(req, function(err, fields, files) {
    //    Object.keys(fields).forEach(function(name){
    //        console.log('got field named ' + name + "// value : " + fields.value);
    //    });
    //
    //    Object.keys(files).forEach(function(name) {
    //        console.log('got file named ' + name);
    //    });
    //
    //    console.log(fields);
    //    console.log(files);
    //});

router.all('/photo/profile/upload', function(req, res, next) {
    console.log("profile photoUload -----");
    console.log(req.query);
});
module.exports = router;