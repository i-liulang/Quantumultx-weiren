/*


圈X:

[rewrite_local]

#窑池解锁会员
^http:\/\/api\.ggmza\.cn\/api\/(user\/autoLogin|user\/info|media\/videoplayer) url script-response-body yaochivip.js



[mitm]
hostname = api.ggmza.cn

下载地址
https://ycpc.cc?code=NKFRYV
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
body = body.replace(/is_vip":\d/g, 'is_vip":1').replace(/video_coupon_amount":\d+/g, 'video_coupon_amount":999').replace(/coin":\d+/g, 'coin":"888"').replace(/price":\d+/g, 'price":0').replace(/vip_id":\d/g, 'vip_id":3').replace(/nickname":.+?,/g, 'nickname":"伟人",').replace(/playAll":\d/g, 'playAll":1').replace(/create_time":.+?,/g, 'create_time":"2099-09-09",').replace(/vip_end_time":.+?,/g, 'vip_end_time":"2099-09-09 23:59:59",');
$done({
    body
});