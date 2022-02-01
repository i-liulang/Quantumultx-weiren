/*
作者伟人q55749353
全能扫描王解锁vip

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
      "initial_tm": "1555050555",
      "expiry": "1870000000"
    },
    "pay": {
      "upgrade_time": "1870000000"
    }
  }
}
$done({body: JSON.stringify(obj)});
