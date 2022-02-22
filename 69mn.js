/*


[rewrite_local]

#69萌娘解锁会员

^http[s]?:\/\/h5x\.(cqcqygr|dppfjj)\.com\/h5\/movie.*$ url script-request-header 69mn.js
[mitm]
hostname = 

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '1295696';
modifiedHeaders['token'] = '6c0c4ece67c760fb6c5a1bdbf7f0a2e8';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = 'channel=t69mn64; nickname=%E4%BC%9F%E4%BA%BA; avatar=https%3A%2F%2Fixbtxi.yechunyang.com%2Fmedia%2Fheadico%2F8.bnc%3Fext%3D.png%26_v%3D%26time%3D1643644800%26token%3D2e37e1ad13e6fc6739593edc26bd4047; bindCode=null; token=6c0c4ece67c760fb6c5a1bdbf7f0a2e8; uid=1295696; username=3CMZVF';

$done({headers : modifiedHeaders});


