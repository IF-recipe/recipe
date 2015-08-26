/**
 * Created by airnold on 15. 7. 30..
 */

var member = require('../routes/member/members');
var sign = require('../routes/member/sign');
var recipe = require('../routes/recipe/recipe');
var photo = require('../routes/photo/photo');


exports.routeSetting = function(app){

    app.use('/rest/sign', sign);
    app.use('/rest/member', member);
    app.use('/rest/photo',photo);
    app.use('/rest/recipe', recipe);

};