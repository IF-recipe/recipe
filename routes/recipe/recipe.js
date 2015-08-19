var express = require('express');
var router = express.Router();

router.post('/recipe/add', function(req, res, next) {
    console.log("add_recipe -----");
    console.log(req.query);
});

router.get('/recipe/delete', function(req, res, next) {
    console.log("delete_recipe -----");
    console.log(req.query);

});

router.get('/recipe/update', function(req, res, next) {
    console.log("update_recipe -----");
    console.log(req.query);

});

router.get('/recipe/search', function(req, res, next) {
    console.log("search_recipe -----");
    console.log(req.query);
});

module.exports = router;