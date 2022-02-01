/*
作者伟人q55749353
全能扫描王解锁vip
^http[s]?:\/\/api-cs.intsig.net/purchase/cs/query_property.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/qnsm.js
*/
var body = $response.body; 
let obj = JSON.parse($response.body);
obj= {
  "ret": "0",
  "data": {
    "server_time": "1577341234",
    "psnl_vip_property": {
      "auto_renewal": false,
      "last_payment_method": "IntSig promotion",
      "nxt_renew_tm": "0",
      "renew_method": "appstore",
      "initial_tm": "1444050885",
      "expiry": "4092647115"
    },
    "pay": {
      "upgrade_time": "1871234000"
    }
  }
}
$done({body: JSON.stringify(obj)});
