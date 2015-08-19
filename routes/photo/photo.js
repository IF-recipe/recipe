var express = require('express');
var router = express.Router();

router.all('/photo/recipe/upload', function(req, res, next) {
    console.log("recipe photoUload -----");
    console.log(req.query);
});

router.all('/photo/profile/upload', function(req, res, next) {
    console.log("profile photoUload -----");
    console.log(req.query);
});
module.exports = router;