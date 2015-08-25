/**
 * Created by airnold on 15. 8. 19..
 */


var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {

    console.log('select');
    /*var user_id = req.query;
    console.log(user_id.id);*/
    console.log(req.params.id);
    res.send('member select');
});

router.post('/',function(req,res,next){
    console.log('create');
    res.send('member create');
});

router.put('/:id', function(req,res,nect){
    console.log('put');
});

router.delete('/:id', function(req,res,next){
    console.log('delete');
});


module.exports = router;
