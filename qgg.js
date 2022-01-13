/*




*/


var modifiedHeaders = $request.headers;

modifiedHeaders['Host']=''; 



$done({headers : modifiedHeaders});

