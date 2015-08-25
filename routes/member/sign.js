/**
 * Created by airnold on 15. 8. 19..
 */

var express = require('express');
var router = express.Router();
var johayoJwt = require('johayo-jwt');
var mongosignbiz = require('../../commonBiz/mongosignBiz.js');
var nimble = require('nimble');

router.post('/signin', function(req, res, next) {

    /**
     * 받을 데이터 -> login에 필요한 id&password 그리고 자동로그인
     * 자동로그인에따라 jwt 생성 시간을 길고 짧게 만들어준다
     * 받은 후 database에서 검색을 한다음 없으면 throw error
     * id&password 확인 후 토큰 생성후 프론트로 전달
     *
     */

    var signin_data = req.body.data;
    var sign_status = undefined;
    var user_token = undefined;

    nimble.series([
        function(callback){
            /**
             * mongo에서 검색 & id passwd 확인
             */
            mongosignbiz.checkSignin(signin_data, function(data){
                sign_status = data;
                console.log(sign_status);
                callback();
            });
        },
        function(callback){
            /**
             * token 생성
             */

            if(sign_status == true){
                /**
                 * 토큰 생성하는 부분
                 */
                var data = {
                    email : signin_data.email,
                    name : signin_data.name
                };
                user_token = johayoJwt.encode(data, 120);
                callback();

            }else{

                callback();

            }
        },
        function(callback){

            /**
             *  토큰 response
             */

            var sign_response_data = {};
            sign_response_data.sign_status = sign_status;
            sign_response_data.sign_token = user_token;

            res.send(sign_response_data);
            callback();

        }

    ]);

});

router.post('/signup', function(req,res, next){

    /**
     * 받을 데이터 -> email, password, nickname
     * 받은 데이터를 가지고 데이터베이스에 저장
     */

    var sign_data = req.body.data;

    mongosignbiz.signupUser(sign_data, function(data){
        res.send(data);
    });

});

router.get('/signup/idcheck', function(req,res,next){

    console.log(req);
    mongosignbiz.checksignupEmail(req.query.email, function(data){
        res.send(data);
    });


});

module.exports = router;
