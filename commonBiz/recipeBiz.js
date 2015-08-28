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
var ObjectId = require('mongoose').Types.ObjectId;


recipeFunc.getrecipedatabyParam = function(paramData, callback){
    //all query
    if(paramData.whos == "" && paramData.foodkind == ""){
        mongo.model.recipes.find({},function (err, docs) {
            callback(docs);
        });
    } else if(paramData.foodkind == ""){
        mongo.model.recipes.find({
            'category.whos' : paramData.whos
        },function (err, docs) {
            callback(docs);
        });
    } else {
        mongo.model.recipes.find({
            'category.whos' : paramData.whos,
            'category.foodkind' : paramData.foodkind
        },function (err, docs) {
            callback(docs);
        });
    }
}

recipeFunc.addNewRecipe = function(newRecipe, callback){
    console.log("------add new Recipe ----- compleStep :" + newRecipe.compleStep);
    var new_recipe = new mongo.model.recipes({
        title : newRecipe.title,
        description : newRecipe.description,
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
            console.log("success : " + new_recipe);
            callback(new_recipe._id);
        }
    });

}

recipeFunc.updatephotoPath= function(data, file, callback){

    console.log("welcome to photo path ------ start :"+data.recipeId+" // " + data.step);
    console.log("-- file : "+file.filename+" // " + file.path);
    //console.log("Object Id 1= == ==" + mongoose.Types.ObjectId(data));
    //console.log("Object Id 2= == ==" + ObjectId(data));
    var str = "steps."+ data.step+".photopath";
    console.log("index : " + str);
    mongo.model.recipes.update({ '_id' : ObjectId(data.recipeId)}, {$set:{ str : file.filename}}, function (err, docs) {
        console.log(docs);
        callback("success");
    });

    console.log("welcome to photo path ------ end ");

}

module.exports = recipeFunc;
