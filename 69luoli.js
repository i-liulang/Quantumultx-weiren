/*

作者伟人q 55749353

[rewrite_local]

#69萝莉解锁会员
^http[s]?:\/\/h5.+you\.me.*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/69luoli.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '4613484';
modifiedHeaders['token'] = '862ee52412a2978079e5215021cadcb7';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1';
modifiedHeaders['Cookie'] = '%E4%BC%9F%E4%BA%BA%E7%A0%B4%E8%A7%A3; avatar=https%3A%2F%2Fi-xb-txi.jnchuanglian.com%2Fmedia%2Fheadico%2F14.bnc%3Fext%3D.png%26_v%3D%26time%3D1640966400%26token%3D321b866d4237407cb63cceab9f1a2523; bindCode=null; token=862ee52412a2978079e5215021cadcb7; uid=4613484; username=DQELEF';

$done({headers : modifiedHeaders});

