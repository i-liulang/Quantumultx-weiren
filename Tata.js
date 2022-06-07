/*

作者伟人q55749353

[rewrite_local]

#Tata直播🚗


^http[s]?:\/\/j9700\.xinxindaka\.com\/api\/public.+(Live|Home.getConfig|getBaseInfo).*$ url script-response-body Tata.js


[mitm]

hostname = *.ttqww.*

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p1 = 'Live.roomCharge';
const p2 = 'Live.enterRoom';
const p3 = 'Home.getConfig';
const p4 = 'getBaseInfo';


//收费返回值
if (url.indexOf(p1) != -1) {
 body = body
.replace(/code":\d+/g, 'code":0');
$notify("伟哥提醒您直播间解锁成功！");

}

//直播间广告
if (url.indexOf(p2) != -1) {
    delete obj.data.info[0].live_icon;
    body = JSON.stringify(obj);
}

//主页广告&屏蔽更新
if (url.indexOf(p3) != -1) {
    delete obj.data.info[0].ad_list ;
     
    body = JSON.stringify(obj);
}
//个人页面
if (url.indexOf(p4) != -1) {
    obj.data.info[0].user_nicename = "伟人" ;
    obj.data.info[0].avatar = "https://static1.keepcdn.com/avatar/2021/11/09/00/23/e8374efaeeaa36fe6004e73490e13b118606eac1.jpg" ;
    obj.data.info[0].coin = 999880;
    obj.data.info[0].level = 10;
    obj.data.info[0].avatar_thumb = "https://static1.keepcdn.com/avatar/2021/11/09/00/23/e8374efaeeaa36fe6004e73490e13b118606eac1.jpg" ;
    obj.data.info[0].id = "qq55749353"




    body = JSON.stringify(obj);
}

$done({
    body

});

 
