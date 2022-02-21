/*


[rewrite_local]

#69萌娘解锁会员

^http[s]?:\/\/h5x\.(cqcqygr|dppfjj)\.com\/h5\/movie.*$ url script-request-header 69mn.js
[mitm]
hostname = 

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '730987';
modifiedHeaders['token'] = 'a0f1562058820e6af8efecb3fefa4820';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = 'avatar=https%3A%2F%2Fixbtxi.yechunyang.com%2Fmedia%2Fheadico%2F25.bnc%3Fext%3D.png%26_v%3D%26time%3D1643644800%26token%3D2e37e1ad13e6fc6739593edc26bd4047; bindCode=U774FL; nickname=%E4%BC%9F%E4%BA%BA; token=a0f1562058820e6af8efecb3fefa4820; uid=730987; username=7N94F5; channel=t69mn64';

$done({headers : modifiedHeaders});


