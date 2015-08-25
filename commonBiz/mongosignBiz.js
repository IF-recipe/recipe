/**
 * Created by airnold on 15. 7. 30..
 */

/**
 *
 *  common biz logic page
 */

var mongo = require('../model/mongoConfig.js');

var mongobiz = {};

mongobiz.checksignupEmail = function(email, callback){

    mongo.model.member.find({ email: email }, function (err, docs) {


        if(docs.length == 0){
            /**
             * 아무것도 없다true를 보내면됨
             */

            callback(true);
        }else{
            /**
             * 존재함 false를 보내면됨
             */

            callback(false)
        }
    });
};


mongobiz.signupUser = function(signup_info, callback){

    var user_sign = new mongo.model.member({
        name : signup_info.name,
        email : signup_info.email,
        password : signup_info.password
    });
    user_sign.save(function(err){
        if(err){
            throw err;
        } else{
            callback('signup success');
        }
    });
};

mongobiz.checkSignin = function(signin_data, callback){
    mongo.model.member.find({ email: signin_data.email }, function (err, docs) {

        callback(signinCompare(signin_data, docs[0]));

    });
};

module.exports = mongobiz;

/**
 *
 * 아래 부분부터는 native javascript function biz
 *
 */

function signinCompare(signin_data, mongo_data){
    if(signin_data.email == mongo_data.email){

        if(signin_data.password == mongo_data.password){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

