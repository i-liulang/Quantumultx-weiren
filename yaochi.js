/*
作者伟人q55749353

瑶池🚗


^http[s]?:\/\/api\.ggmza\.cn\/api(/user/info|/my/startupBanner|/common/enterNotice|/MediaV2/page) url script-response-body yaochi.js

QX MITM = 
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = 'user/info';
//const p2 = 'my/startupBanner';
const p3 = 'common/enterNotice';

const p5 = 'user/checkVersion';
if (url.indexOf(p1) != -1) {
    let obj = JSON.parse(body);   
     obj.data.nickname = "伟人";
	obj.data.avatar = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
	obj.data.coin = 999880;
     obj.data.video_coupon_amount = 999880;
     obj.data.is_vip = 1;
     obj.data.vip_end_time = 409264711;
     obj.data.create_time = "2999-09-09";
delete obj.data.banner ;
     
      
 	body = JSON.stringify(obj);
}
//开屏
/*
if (url.indexOf(p2) != -1) {
  let obj = JSON.parse(body);
delete obj.data;
   body = JSON.stringify(obj);
}
*/
//公告
if (url.indexOf(p3) != -1) {
  let obj = JSON.parse(body);
delete obj.data;
   body = JSON.stringify(obj);
}

//更新
if (url.indexOf(p5) != -1) {
  let obj = JSON.parse(body);
delete obj.data ;
   body = JSON.stringify(obj);
}
 $done({body});

