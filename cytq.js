/*

彩云天气

^http[s]?:\/\/biz\.caiyunapp\.com\/v2\/user.*$ url script-response-body cytq.js

hostname = *.caiyunapp.*

*/


var body = $response.body; //声明一个变量body并以响应消息体赋
let obj = JSON.parse($response.body);
obj=//这里就填写网球修改过的数据
{

  "result": {
    "xy_vip_expire": 0,
    "vip_expired_at": 0,
    "ranking_above": 66.0,
    "auto_renewal_type": "",
    "third_party_id": null,
    "svip_expired_at": 32494698549.4167709351,
    "is_login": false,
    "is_xy_vip": true,
    "platform_name": "weixin",
    "xy_svip_expire": 32494698549,
    "third_party_ids": [],
    "score": 2000,
    "is_xy_auto_renewal": false,
    "is_primary": true,
    "phone_num": "18688888888",
    "free_trial": 0,
    "last_acted_at": 32494698549.2653670311,
    "vip_type": "s",
    "is_phone_verified": true,
    "wt": {
      "ranking_above": 66.0,
      "created_at": 1599863895.1142549515,
      "last_acted_at": 32494698549.2653670311,
      "vip": {
        "enabled": true,
        "is_auto_renewal": false,
        "auto_renewal_type": "",
        "svip_auto_renewal_type": "",
        "svip_expired_at": 32493834549000.4167709351,
        "expired_at": 0
      },
      "svip_given": 365,
      "is_login": false
    },
    "device_id": "382D5148-2801-499E-98B7-878A51B71A2A",
    "name": "伟人",
    "bound_status": {
      "qq": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "weibo": {
        "username": "伟人",
        "is_bound": false,
        "id": ""
      },
      "google": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "apple": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "weixin": {
        "username": "",
        "is_bound": true,
        "id": "5f5bfc57d2c6890014e26bb8"
      },
      "caiyun": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "twitter": {
        "username": "",
        "is_bound": false,
        "id": ""
      },
      "facebook": {
        "username": "",
        "is_bound": false,
        "id": ""
      }
    },
    "created_at": 1599863895.1142361164,
    "is_auto_renewal": false,
    "hasBeenInvited": true,
    "platform_id": "o3rJ_t00r0mxqS6GCVWMaVtEFLUk",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNjc0MjI3MTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.wbgfCRp3W9zEvzEYsiWxerta4G-d-b0qlYCcilevOKY",
    "svip_given": 365,
    "avatar": "https://thirdqq.qlogo.cn/g?b=oidb&k=wdL0rXYRmcbCw7aWqjj1NA&s=100&t=1552051295",
    "is_vip": true,
    "gender": null,
    "_id": "5f5bfc57d2c6890014e26bb8"
  },
  "rc": 0
}
$done({body: JSON.stringify(obj)});
