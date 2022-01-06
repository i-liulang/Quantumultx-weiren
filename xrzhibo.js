/*
作者伟人q55749353

杏仁直播解锁付费

下载地址https://www.06bb.cc/?channelCode=10095701


[rewrite_local]

^http[s]?:\/\/.+((xingrend)|(xrzhuanxian)|(xrcz7812)|(xing)).+(livePayDeduct|/member/detail|/homeNotice|/message/banners|hot-data|/member/money|/deal|/pop_prop) url script-response-body xrzhibo.js

[mitm]
hostname= 

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p2 = 'livePayDeduct';
const p3 = 'member/detail';
const p4 = 'homeNotice';
const p5 = 'message/banners';
const p6 = 'hot-data';
const p7 = 'member/money';
const p8 = 'deal/pop_prop';

//播放
if (url.indexOf(p2) != -1) {
    obj.data.liveFee = 0;
    obj.data.isLivePay = 0;
    obj.data.diamonds = 999880;
    obj.code = 0;
  body = JSON.stringify(obj);
}
//个人
if (url.indexOf(p3) != -1) {    
    obj.data.phone = 18666666666;
    obj.data.vip = 5;
    obj.data.nick_name = "伟人破解";
    obj.data.head_img = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.total_account = 999880;
    obj.data.id = "qq55749353";
  body = JSON.stringify(obj);
}
//公告
if (url.indexOf(p4) != -1) {    
    obj.code = 501;
  body = JSON.stringify(obj);
}
//滚动广告主页
if (url.indexOf(p5) != -1) {    
    delete obj.data;
  body = JSON.stringify(obj);
}
//主页广告
if (url.indexOf(p6) != -1) {    
    delete obj.data;
  body = JSON.stringify(obj);
}
//余额
if (url.indexOf(p7) != -1) {    
    obj.data.total_account = 999880;
  body = JSON.stringify(obj);
}
//礼物返回值
if (url.indexOf(p8) != -1) {    
    obj.code = 0;
  body = JSON.stringify(obj);
}


$done({body});
