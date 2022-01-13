/*

^http[s]?.+(ad|toutiao|taobao|sohu|ulogs).+ url script-request-header ^http[s]?.+(ad|toutiao|taobao|sohu|ulogs).+ url script-request-header qgg.js 
*/


var modifiedHeaders = $request.headers;

modifiedHeaders['Host']=''; 



$done({headers : modifiedHeaders});

