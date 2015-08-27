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
    var new_recipe = new mongo.model.recipes({
        title : newRecipe.title,
        description : newRecipe.description,
        completephotopath : newRecipe.completephotopath,
        catergory : {
            whos : undefined,
            foodkind : newRecipe.foodkind
        },
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
    console.log(new_recipe);
    console.log("start save =====")

    new_recipe.save(function(err){
        if( err ){
            console.log(err);
            throw err;
        } else{
            console.log("success : " + new_recipe._id);
            callback(new_recipe._id);
        }
    });

}

recipeFunc.updatephotoPath= function(data, callback){
    console.log("welcome to photo path ------");
    console.log(data);
    mongo.model.recipes.find({ _id : new ObjectId(data)}, function (err, docs) {
        console.log("find call back -------!!")
        console.log(docs);
        callback("success");

    });

    console.log("welcome to photo path ------ end ");

}

module.exports = recipeFunc;
