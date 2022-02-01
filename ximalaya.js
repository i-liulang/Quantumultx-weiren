/*



[rewrite_local]

^http[s]?:\/\/.+ximalaya.+(mobile-user\/v2\/homePage|vip/v1/recommand/ts|business-vip-presale-core-web/product/info/ts|/mobile-album/album/page/ts).*$ url script-response-body ximalaya.js

[mitm]
hostname= *xima*

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/mobile-user/v2/homePage/';
const p2 = '/vip/v1/recommand/ts';
const p3 = '/playpage';
const p4 = '/mobile-album/album/page/ts';
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
if (url.indexOf(p3) != -1) {
    obj.data.userInfo.userNickName = "伟人破解";
    obj.data.userInfo.userLogoPic = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.userInfo.vipStatus = 2;
    obj.data.userInfo.expireDate = "2999-12-12";
    obj.data.userInfo.expireDays = 9999999;
    obj.data.userInfo.userLevel = 2;
     delete obj.data.recommendVipProduct;
     delete obj.data.moreVipChannels;
     delete obj.data.jointVipProducts;
     //delete obj.data.vipProducts;

     delete obj.data.ads;
	body = JSON.stringify(obj);
}
//播放页面剩余时间
if (url.indexOf(p2) != -1) {
	delete obj.data.promotionGuideInfo.buttonText;
     delete obj.data.promotionGuideInfo.countdownText;
     delete obj.data.promotionGuideInfo.explainText;
     delete obj.data.promotionGuideInfo.guidance;
          obj.data.promotionGuideInfo.paoPaoTipsInfo.trackTipsText = "伟人解锁";
	body = JSON.stringify(obj);
}

//播放列表改免费
if (url.indexOf(p4) != -1) {
	for (var i = 0;i < obj.data.tracks.list.length;i++) {
		obj.data.tracks.list[i].isFree = true;
		obj.data.tracks.list[i].isPaid = false;
	}
	body = JSON.stringify(obj);
}

$done({
	body
});
