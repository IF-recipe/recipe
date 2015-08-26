/**
 *
 * Created by kimsungwoo on 15. 8. 26..
 *
 * define recipe functions.
 * get recipe data via mongo recipe collection
 *
 * function getrecipedatabyParam(whos, foodkinds, id)
 */

var mongo = require('../model/mongoConfig.js');
var recipeFunc = {};



recipeFunc.getrecipedatabyParam = function(paramData, callback){
    mongo.model.recipes.find({
            category : {
                whos : "그들"
            }
        }
        ,function (err, docs) {
        callback(docs);
    });
}

recipeFunc.addNewRecipe = function(newRecipe, callback){
    console.log("------add new Recipe -----");
    console.log(newRecipe);

    var new_recipe = new mongo.model.recipes({
        title : newRecipe.title,
        description : newRecipe.description,
        completephotopath : newRecipe.completephotopath,
        stuffs : newRecipe.stuffs,
        hashtag : newRecipe.hashtag,
        steps : newRecipe.steps,
        reply : undefined,
        writer : newRecipe.writer,
        registrationdate : Date.now(),
        love : 0,
        level : 0,
        see : 0,
        cookingtime : newRecipe.cookingtime,
        saleinfo : undefined
    });
    console.log("start save =====")
    new_recipe.save(function(err){
        if( err ){
            console.log(err);
            throw err;
        } else{
            console.log("success");
            callback('add new Recipe success');
        }
    });

}

module.exports = recipeFunc;
