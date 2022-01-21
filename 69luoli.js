/*
作者伟人q55749353

[rewrite_local]

#69萝莉解锁会员

^http[s]?:\/\/h5.+you\.me.*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/69luoli.js
[mitm]
hostname = 

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '4614548';
modifiedHeaders['token'] = 'e7b24ec82acf9ec92229292d102e547c';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = 'avatar=https%3A%2F%2Fi-xb-txi.jnchuanglian.com%2Fmedia%2Fheadico%2F21.bnc%3Fext%3D.png%26_v%3D%26time%3D1640966400%26token%3D321b866d4237407cb63cceab9f1a2523; bindCode=null; nickname=%E4%BC%9F%E4%BA%BA; token=e7b24ec82acf9ec92229292d102e547c; uid=4614548; username=IHSLEF';

$done({headers : modifiedHeaders});
