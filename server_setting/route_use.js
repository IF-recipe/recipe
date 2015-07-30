/**
 * Created by airnold on 15. 7. 30..
 */

var routes = require('../routes/index');
var users = require('../routes/users');

exports.routeSetting = function(app){

    app.use('/', routes);

    app.use('/users', users);

};