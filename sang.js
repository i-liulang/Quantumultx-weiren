/*


[rewrite_local]

#三更
^https:\/\/.+(kaqcn|txt2021|invlock).+\/api/.*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/sang.js

[mitm]
hostname = *txt2021*,*kaqcn*,*invlock*

*/


var modifiedHeaders=$request['headers'];modifiedHeaders['seq']='AFD9C140-4C6E-469E-8F4D-535D9184699F';modifiedHeaders['token']='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyXzE4OTc2MzAxIiwiZXhwIjoxOTYwNDU5OTI4fQ.Ms6EfZmpSZR_AYtrM4bt00n2TrV0hoQXTZkIlbIsrtof1XlIVT2foqLn3mtkaS63U8KprYM0CVU0dJfhSZMXXQ';modifiedHeaders['User-Agent']='FourInOne/3.5.3\x20(iPhone;\x20iOS\x2014.7;\x20Scale/2.00)';modifiedHeaders['deviceos']='ios_iPhone9,1\x20;\x20iOS\x2014.7\x20;';$done({'headers':modifiedHeaders});
