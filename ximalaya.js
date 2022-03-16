/*

作者伟人q55749353

[rewrite_local]

^http[s]?:\/\/.+ximalaya.+(product/info|/mobile-user/v2/homePage|/vip/v1/recommand/ts|mobile-playpage/playpage/tabs|/mobile-album/album/page/ts|mobile/v1/album/track/ts|product/promotion/v./whole/album/\d+/price/dynamic/ts).*$ url script-response-body ximalaya.js

[mitm]
hostname= *xima*

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = 'mobile-user/v2/homePage/';
const p2 = 'business-vip-presale-core-web/product/info';
const p3 = 'mobile-playpage/playpage/tabs';
const p4 = 'mobile-album/album/page/ts';
const p5 = 'vip/v1/recommand';
const p6 = 'mobile/v1/album/track/ts'
const p7 = 'price/dynamic/ts';
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
    obj.data.userInfo.userNickName = "伟人破解";
    obj.data.userInfo.userLogoPic = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.data.userInfo.vipStatus = 2;
    obj.data.userInfo.expireDate = "2999-12-12";
    obj.data.userInfo.expireDays = 9999999;
    obj.data.userInfo.userLevel = 2;
    obj.data.userInfo.userLevelIcon = "http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png";
    delete obj.data.recommendVipProduct;
    delete obj.data.moreVipChannels;
    delete obj.data.jointVipProducts;
    
    
    body = JSON.stringify(obj);
}
//播放页面剩余时间
if (url.indexOf(p3) != -1) {
     //delete obj.data.playpage.promotionGuideInfo;
    //obj.data.playpage.promotionGuideInfo.expireTime = 40926471150001;

    //obj.data.playpage.promotionGuideInfo.paoPaoTipsInfo.albumTipsText = "伟人解锁";

//obj.data.playpage.promotionGuideInfo.paoPaoTipsInfo.trackTipsText = "伟人解锁";

    body = JSON.stringify(obj);
}

//播放列表改免费
if (url.indexOf(p4) != -1) {
    for (var i = 0; i < obj.data.tracks.list.length; i++) {
        obj.data.tracks.list[i].isFree = true;
        obj.data.tracks.list[i].isPaid = false;
    }
//删除底部开会员框架
    delete obj.data.albumGuidVipResourceInfo;
    body = JSON.stringify(obj);
}
//主界面会员
if (url.indexOf(p5) != -1) {

    obj.data.modules[0].guideText = "伟人破解";
    obj.data.modules[0].nickName = "伟人破解";
    //delete obj.data.modules[0].guideText;
    obj.data.modules[0].subText.text = "2999-09-09到期";
    obj.data.modules[0].vipLevel.levelIcon = "http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png!op_type=0&unlimited=0";
    //delete obj.data.modules[0].button.actionType;
    //delete obj.data.modules[0].button.buttonIcon;
    delete obj.data.modules[0].button;
    obj.data.vipStatus = 2;
    obj.data.nickName = "伟人破解";

    body = JSON.stringify(obj);
}


//播放列表改免费
if (url.indexOf(p6) != -1) {
    for (var i = 0; i < obj.data.list.length; i++) {
        obj.data.list[i].isFree = true;
        obj.data.list[i].isPaid = false;
    }
    
    body = JSON.stringify(obj);
}
//删除底部购买框架
if (url.indexOf(p7) != -1) {
    obj.data.isAuthorized = true ;
    body = JSON.stringify(obj);
}
$done({
    body
});
