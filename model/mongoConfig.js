var config = require('../server_setting/server_config/config');
var mongo = {};

mongo.mongoose = require('mongoose');
var db = mongo.mongoose.connect(config.mongodb.connectUrl).connection;

db.on('error', console.error.bind(console, 'connection error -0-:'));
db.once('open', function (callback) {
    console.log("db open callback : "+callback);
});

var Schema = mongo.mongoose.Schema;

/* 스키마 */
mongo.schema = {};

/**
 * 사용자 Object - member
 * _Id : String
 * name : 이름
 * password : 비밀번호
 * email : 이메일
 * profile : {
 *      nickname : 닉네임
 *      phone : 핸드폰 번호
 *      address : 주소
 *      ponit : 포인트 [마일리지]
 *      grade : 회원 등급
 *      favoriterecipes : 좋아하는 글 목록 - 해당 객체의 Object Id 값 or 글 번호 설정 예정
 *      evaluaterecipes : 별점 단 레시피 목록 - 레시피 ID값 등록예정
 *      orderinfo : 배송 정보 - 배송정보 객체의 ObjectID or 배송정보 아이디 설정 예정
 *      registrationdate : 가입일자
 * }
 * */
mongo.schema.member  = new Schema({
    _Id : Schema.Types.ObjectId,
    name : String,
    password : String,
    email : String,
    profile : {
        nickname : String,
        phone : String,
        address : [String],
        photo : String,
        point : Number,
        grade : Number,
        favoriterecipes : [String],
        evaluaterecipes : [String],
        orderinfo : [String],
        registrationdate : {type: Date, default: Date.now}
    }
});

/**
 * 레시피 Object - shcema
 * title : 레시피 제목
 * description : 요리 간단 설명
 * complatephotopath : 메인 사진
 * stuffs : 사용자 입력 재료
 * hashtag : 헤쉬 태그
 * * category : [{
 *      whos : 쉐프, 나, 다른사람 으로 구분 <대 분류>
 *      foodKind : 음식 종류 ex) 한식, 일식, 중식, 분식, .....etc
 * }],
 * steps : [{            <사진 & 내용 Obejct 로 배열로 저장됨>
 *      step : index
 *      photopath : 사진 저장 경로
 *      content : 내용
 * }],
 * reply : [{               <글쓴이 & 내용 Obejct 로 배열로 저장됨>
 *      content : 내용
 *      rwriter : 글쓴이 닉네임
 * }],
 * writer : 글쓴이 닉네임
 * registrationdate : 등록일
 * love : 좋아요 or 추천수
 * level : 레시피 등급 별점
 * see : 조회수
 * cookingtime : 조리시간
 * saleinfo : { 판매유무
 *      materials : [{
 *          kind : 종류
 *          name : 이름
 *          amount : 수량
 *          unit : 단위
 *          price : 판매가격
 *      }],
 *      totalprice : 총액
 * }
 * @type {mongo.mongoose.Schema}
 */
mongo.schema.recipes = new Schema({
    _Id : Schema.Types.ObjectId,
    title : String,
    description : String,
    completephotopath : String,
    stuffs : String,
    hashtag : [{
        name : String
    }],
    catergory : {
        whos : String,
        foodkind : String
    },
    steps :[{
        step: Number,
        photopath : String,
        content : String
    }],
    reply : [{
        content : String,
        rwriter : String
    }],
    writer : String,
    registrationdate : {type: Date, default: Date.now},
    love : Number,
    level : Number,
    see : Number,
    cookingtime : String,
    saleinfo : {
        materials : [{
            kind : String,
            name : String,
            amount : Number,
            unit : String,
            price : Number
        }],
        totalprice : Number
    }
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
 *  memberinfo : {  <회원 정보>
 *      _Id : 회원 아이디
 *      phone : 핸드폰 번호
 *      address : 배송지 정보
 *  },
 *  orderdate : 주문일자
 *  totalprice : 총액
 */

mongo.schema.order = new Schema({
    materials : [{
        kind : String,
        name : String,
        amount : Number,
        unit : String,
        price : Number
    }],
    memberinfo :{
        _Id : Schema.Types.ObjectId,
        phone : String,
        address : String
    },
    orderdate : {type: Date, default: Date.now},
    totalprice : Number
});
/**
 *  모델
 *  */
mongo.model = {};
mongo.model.member = mongo.mongoose.model('member', mongo.schema.member);
mongo.model.recipes = mongo.mongoose.model('recipes', mongo.schema.recipes);
mongo.model.order = mongo.mongoose.model('order', mongo.schema.order);

module.exports = mongo;

