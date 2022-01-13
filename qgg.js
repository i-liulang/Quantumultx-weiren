/*

^http[s]?.+(ad|toutiao|taobao|sohu|ulogs).+


*/


var modifiedHeaders = $request.headers;

modifiedHeaders['Host']=''; 



$done({headers : modifiedHeaders});

