/*

作者伟人q55749353

[rewrite_local]

#三更
^https:\/\/.+(kaqcn|txt2021|invlock).+\/api/.*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/sang.js

[mitm]
hostname = *txt2021*,*kaqcn*,invlock

*/



var modifiedHeaders = $request.headers;

modifiedHeaders['seq'] = 'AFD9C140-4C6E-469E-8F4D-535D9184699F';

modifiedHeaders['token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyXzE4OTUzODg5IiwiZXhwIjoxOTYwNDQ4NDM5fQ.neA7r8xkGWZ1A-N2KzyFhGkLWZg2dt3mu9lMT4QllqC9TBjHFnHUR_y-0dXwZ_7HHlRhzd52zSyeKMtpu5uicw';

modifiedHeaders['User-Agent'] = 'FourInOne/3.5.3 (iPhone; iOS 14.7; Scale/2.00)';

modifiedHeaders['deviceos'] = 'ios_iPhone9,1 ; iOS 14.7 ;';

$done({headers : modifiedHeaders});

