var express = require('express');
var router = express.Router();
var recipeBiz = require('../../commonBiz/recipeBiz.js');

router.post('/add', function(req, res, next) {
    console.log("add_recipe -----");
    console.log(req.body);
});

router.get('/delete', function(req, res, next) {
    console.log("delete_recipe -----");
    console.log(req.query);

});

router.get('/update', function(req, res, next) {
    console.log("update_recipe -----");
    console.log(req.query);

});

router.get('/search', function(req, res, next) {
    console.log("search_recipe -----");

    var paramData = {};
    paramData.whos = req.query.whos;
    paramData.foodkinds = req.query.foodkinds;
    paramData.id = req.query.id;

    recipeBiz.getrecipedatabyParam(paramData, function(data){
        res.send(data);
    });

});

module.exports = router;
