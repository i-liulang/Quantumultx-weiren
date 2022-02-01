/*
作者伟人q55749353
蜜蜂试卷解锁vip

*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj= {
 
  "msg": "",
  "ret": 0,
  "data": {
    "expiry": "4092647110",
    "type": 1
  }

}
$done({body: JSON.stringify(obj)});
