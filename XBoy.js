var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = 'Account/IndexDetail';
const p2 = 'movie/DetailInfo';
const p3 = 'movie/watch';

//个人页面
if (url.indexOf(p1) != -1) {
    obj.nickName = "伟人破解" ;
    obj.headPortrait = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a" ;
    obj.rewardBadge = true ;
    obj.vipLevel = 3 ;
    obj.vipEndTime = "2999-09-09"
    obj.cartoonVip = true ;
    obj.cartoonVipEndTime = true ;   
    body = JSON.stringify(obj);

}
//播放页面
if (url.indexOf(p2) != -1) {
    obj.movie.isFree = true ;
    
    body = JSON.stringify(obj);

}
//播放验证
if (url.indexOf(p3) != -1) {
    obj.hadWatch = true ;
    obj.canWatch = true ;
    body = JSON.stringify(obj);

}

$done({
    body
});
