/*

作者伟人q55749353

[rewrite_local]

#熊猫视频🚗

^http[s]?:\/\/api.ttqww.com//api/login/thirdInfoRegister.*$ url request-body .+ request-body device=f3e0e29edcd54f3cb205b07ddc10c5b0&downfrom=AppStore&imei=d94addaa452f53532d2a5e5fd9bc85ea5f7af901&invitation=&mark=1&model=iPhone&os=ios&sign=be7c7050ff8826b7f3712820e81fef34&time=1654001012951&unionid=f3e0e29edcd54f3cb205b07ddc10c5b0&user_ip=220.195.70.50&uuid=f3e0e29edcd54f3cb205b07ddc10c5b0&version=1.0.0
^http[s]?:\/\/api.ttqww.com//api(/user/detail|/about/shanping|/home/notice|/home/video_detail).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/xmsp.js


[mitm]

hostname = *.ttqww.*

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = 'user';
const p2 = 'shanping';
const p3 = 'home/notice';
const p4 = 'video_detail';

if (url.indexOf(p1) != -1) {
 body = body
.replace(/nick":"(.*?)",/g, 'nick":"伟人",')

.replace(/small_avatar":"(.*?)",/g, 'small_avatar":"https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a",')

.replace(/endtime":\d+/g, 'endtime":32493834549')

.replace(/is_svip":\d/g, 'is_svip":1')

.replace(/gold_coin":"\d/g, 'gold_coin":"999880')

.replace(/vip":\d/g, 'vip":1')

.replace(/download_coupon_number":\d/g, 'download_coupon_number":999')

.replace(/movie_coupon_number":\d/g, 'download_coupon_number":999');

}
//开屏
if (url.indexOf(p2) != -1) {
    delete obj.data;
    body = JSON.stringify(obj);
}
//公告
if (url.indexOf(p3) != -1) {
    delete obj.data;
     //obj.data.notice.content = "<font color='#3300FF'>1、作者 伟人q55749353！<\/font><br>\r\n'>";
    body = JSON.stringify(obj);
}
//播放页面广告
if (url.indexOf(p4) != -1) {
    delete obj.data.poster;
    body = JSON.stringify(obj);
}

$done({
    body

});

 
