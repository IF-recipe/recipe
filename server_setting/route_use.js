/**
 * Created by airnold on 15. 7. 30..
 */

var member = require('../routes/member/members');
var sign = require('../routes/member/sign');


exports.routeSetting = function(app){

    app.use('/rest/sign', sign);
    app.use('/rest/member', member);

};