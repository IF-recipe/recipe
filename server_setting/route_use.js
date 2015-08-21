/**
 * Created by airnold on 15. 7. 30..
 */

var routes = require('../routes/index');
var users = require('../routes/users');
var recipe = require('../routes/recipe/recipe');
var photo = require('../routes/photo/photo');
var dw = require('../routes/photo/dw');


exports.routeSetting = function(app){
    app.use('/', routes);
    app.use('/rest', recipe);
    app.use('/rest', photo);
    app.use('/users', users);
    app.use('/rest', dw);
};