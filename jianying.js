/*

作者伟人q55749353

简影解锁🔓

^http[s]?:\/\/api\.jianmovie\.com/(cardinfo|/expense) url script-response-body jianying.js
[rewrite_local]


[mitm]
hostname= *.jianmovie.*


*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = 'cardinfo';
const p2 = 'expense';

//会员破解
if (url.indexOf(p1) != -1) {

    obj.uid = 55749353;
    obj.nickname = "伟人";
    
    obj.avatar = "https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a";
    obj.vip_type = 1;
    obj.is_vip = 1;
    obj.vip_expire_time = 4092647115;
  
   body = JSON.stringify(obj);
}

//导出
if (url.indexOf(p2) != -1) {
    obj.success = 1;
  body = JSON.stringify(obj);
}






$done({body});
