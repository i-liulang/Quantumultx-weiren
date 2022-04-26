/*


[rewrite_local]

#鲍鱼盒子🚗

^http[s]?:\/\/[0-9.]+.(\w{2,8})?/api(/video/report_item?|/live/room/detail?).*$ url script-request-header baoyuhezi.js

[mitm]
hostname = *.*.*

*/

var modifiedHeaders = $request.headers;


modifiedHeaders['authorization'] = 'bearer d13d7099193bc9f8b45c8abab42794ea';


$done({headers : modifiedHeaders});


