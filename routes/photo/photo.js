var fs = require('fs');
var express = require('express');
var router = express.Router();

router.post('/photo/recipe/upload', function(req, res, next) {
    console.log("recipe photoUload -----");
    console.log(req.body);
    console.log(req.head);
    console.log(req.files);
    console.log(req.file);
    var multiparty = require('multiparty');
    var form  = new multiparty.Form();
    form.parse(req, function(err, fields, files){

    });


});

router.all('/photo/profile/upload', function(req, res, next) {
    console.log("profile photoUload -----");
    console.log(req.query);
});
module.exports = router;