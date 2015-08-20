var fs = require('fs');
var express = require('express');
var router = express.Router();

router.post('/photo/recipe/upload', function(req, res, next) {
    console.log("recipe photoUload -----");
    console.log(req.body);
    console.log(req.head);
    console.log(req.params);
    console.log(req.query);
    console.log(req.files);
    console.log("------------req end")
});

router.all('/photo/profile/upload', function(req, res, next) {
    console.log("profile photoUload -----");
    console.log(req.query);
});
module.exports = router;