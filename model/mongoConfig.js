/**
 * Created by parkbeomsoo on 15. 7. 30..
 */

var config = require('./config');
var mongo = {};

mongo.mongoose = require('mongoose');
mongo.mongoose.connect(config.mongodb.connectUrl);
var Schema = mongo.mongoose.Schema;

/* 스키마 */
mongo.schema = {};

/**
 * 사용자 Object - member
 * _Id : String
 * name : 이름
 * password : 비밀번호
 * email : 이메일
 * nickname : 닉네임
 * phone : 핸드폰 번호
 * address : 주소
 * ponit : 포인트 [마일리지]
 * grade : 회원 등급
 * favoriteRecipes : 좋아하는 글 목록 - 해당 객체의 Object Id 값 or 글 번호 설정 예정
 * orderInfo : 배송 정보 - 배송정보 객체의 ObjectID or 배송정보 아이디 설정 예정
 * registrationDate : 가입일자
 * */
mongo.schema.member  = new Schema({
    _Id : Schema.Types.ObjectId,
    name : String,
    password : String,
    email : String,
    profile : {
        nickname : String,
        phone : String,
        address : String,
        photo : [String],
        point : Number,
        grade : Number,
        favoriteRecipes : [String],
        orderInfo : [String],
        registrationDate : {type: Date, default: Date.now}
    }
});

/**
 * 레시피 Object - shcema
 * title : 레시피 제목
 * Contents : [{            <사진 & 내용 Obejct 로 배열로 저장됨>
 *      photo : 사진 저장 경로
 *      content : 내용
 * }],
 * reply : [{               <글쓴이 & 내용 Obejct 로 배열로 저장됨>
 *      content : 내용
 *      rwriter : 글쓴이
 * }],
 * writer : 글쓴이
 * registrationDate : 등록일
 * love : 좋아요 or 추천수
 * level : 레시피 등급 별점
 * cookingTime : 조리시간
 * category : [{
 *      whos : 쉐프, 나, 다른사람 으로 구분 <대 분류>
 *      foodKind : 음식 종류 ex) 한식, 일식, 중식, 분식, .....etc
 * }]
 * @type {mongo.mongoose.Schema}
 */
mongo.schema.recipe = new Schema({
    title : String,
    Contents :[{
        photo : [String],
        content : [String]
    }],
    reply : [{
        content : String,
        rwriter : String
    }],
    writer : [String],
    registrationDate : {type: Date, default: Date.now},
    love : Number,
    level : Number,
    cookingTime : String,
    catergory : [{
        whos : String,
        foodkint : String
    }]

});

/** 주문 정보 collection의 경우, 재료가격 및 총액 등 내부 속성들에 대한 변경 필요. **
 * 주문 정보 Object
 *  materials : {   <레시피 재료>
 *      kine : 종류
 *      name : 이름
 *      amount : 수량
 *      unit : 갯수
 *      price : 단가
 *  },
 *  memberInfo : {  <회원 정보>
 *      _Id : 회원 아이디
 *      phone : 핸드폰 번호
 *      address : 배송지 정보
 *  },
 *  orderDate : 주문일자
 *  totalPrice : 총액
 */

mongo.schema.order = new Schema({
    materials : [{
        kind : String,
        name : String,
        amount : Number,
        unit : String,
        price : Number
    }],
    memberInfo :{
        _Id : Schema.Types.ObjectId,
        phone : String,
        address : String
    },
    orderDate : {type: Date, default: Date.now},
    totalPrice : Number
});

/**
 * 레시피세트 - 레시피에 대한 재료 셋
 *  recipeId : 레시피 아이디
 *  materials : {   <레시피 재료>
 *      kine : 종류
 *      name : 이름
 *      amount : 수량
 *      unit : 갯수
 *      price : 단가
 *  },
 *  totalPrice : 총액
 */
mongo.schema.recipeSet = new Schema({
    recipeId : Schema.Types.ObjectId,
    materials : [{
        kind : String,
        name : String,
        amount : Number,
        unit : String,
        price : Number
    }],
    totalPrice : Number
});

/**
 *  모델
 *  */
mongo.model = {};
mongo.model.member = mongo.mongoose.model('member', mongo.schema.member);
mongo.model.recipe = mongo.mongoose.model('recipe', mongo.schema.recipe);
mongo.model.orderInfo = mongo.mongoose.model('orderInfo', mongo.schema.orderInfo);
mongo.model.recipeSet = mongo.mongoose.model('recipeSet', mongo.schema.recipeSet);

module.exports = mongo;

