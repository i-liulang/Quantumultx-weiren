/*



[rewrite_local]

^http[s]?:\/\/.+ximalaya.+(mobile-user\/v2\/homePage|vip/v1/recommand/ts).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/ximalaya.js

[mitm]
hostname= *xima*

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/mobile-user/v2/homePage/';
const p2 = '/vip/v1/recommand/ts';

//个人页面
if (url.indexOf(p1) != -1) {
obj.data.nickname = "伟人破解";
obj.data.isVip = true;
obj.data.vipExpireTime = 32493834549000;
obj.data.vipStatus = 2;
obj.data.vipLevel = 5;
obj.data.anchorVipInfo.isVip = true;
obj.data.vipInfo.isVip = true;
obj.data.vipInfo.level = 5;
obj.data.mobileLargeLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
obj.data.mobileSmallLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
obj.data.mobileMiddleLogo = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";

body = JSON.stringify(obj);
}

//主页会员
if (url.indexOf(p2) != -1) {
	delete obj.data.modules;
	body = JSON.stringify(obj);
}
$done({
	body
});
