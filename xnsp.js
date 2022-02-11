/*

作者伟人q55749353

[rewrite_local]

#小鸟视频🚗
^http:\/\/xnsp\.tv\/api\/videoweb\/ying\/get(MemberInfo|Video).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/xnsp.js

[mitm]
hostname = xnsp.tv

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['deviceCode'] = '1644546775238827958';

modifiedHeaders['Authorization'] = 'identify_v1 ff14d9063a2ebd1f0eac2d5fb475a511';

modifiedHeaders['token'] = 'eyJhbGciOiJIUzI1NiJ9.eyJleHQiOjE2NDUzNDg0MzQxNzUsInVpZCI6MTYwMjg5NTUsImlhdCI6MTY0NDU0NzM4NzY0N30.S5qU8IoqHgKleuaE9h9Hdm_2Vj3uj4eeNqpgQLx1FdA';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1';

$done({headers : modifiedHeaders});
