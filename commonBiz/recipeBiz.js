/**
 *
 * Created by kimsungwoo on 15. 8. 26..
 *
 * define recipe functions.
 *
 * get recipe data via mongo recipe collection
 *
 * function getrecipedatabyParam(whos, foodkinds, id)
 */

var mongo = require('../model/mongoConfig.js');

var recipeFunc = {};

recipeFunc.getrecipedatabyParam = function(paramData, callback){
    console.log(paramData);


}

module.exports = recipeFunc;
