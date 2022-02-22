/*


[rewrite_local]

#69萝莉解锁会员

^https://h5.+com/h5/movie.*$ url script-request-header 69luoli.js
[mitm]
hostname = 

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '6053637';
modifiedHeaders['token'] = '5da7ac6d7ea999803c88bbc8513f8def';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = 'nickname=%E4%BC%9F%E4%BA%BA; avatar=https%3A%2F%2Fixbtxi.yechunyang.com%2Fmedia%2Fheadico%2F26.bnc%3Fext%3D.png%26_v%3D%26time%3D1643644800%26token%3D2e37e1ad13e6fc6739593edc26bd4047; bindCode=null; token=5da7ac6d7ea999803c88bbc8513f8def; uid=6053637; username=Q7V2SF';

$done({headers : modifiedHeaders});

