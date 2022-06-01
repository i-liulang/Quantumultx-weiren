/*

作者伟人q55749353

[rewrite_local]

#熊猫视频🚗

^http[s]?:\/\/api.ttqww.com//api/login/thirdInfoRegister.*$ url request-body .+ request-body device=f3e0e29edcd54f3cb205b07ddc10c5b0&downfrom=AppStore&imei=d94addaa452f53532d2a5e5fd9bc85ea5f7af901&invitation=&mark=1&model=iPhone&os=ios&sign=be7c7050ff8826b7f3712820e81fef34&time=1654001012951&unionid=f3e0e29edcd54f3cb205b07ddc10c5b0&user_ip=220.195.70.50&uuid=f3e0e29edcd54f3cb205b07ddc10c5b0&version=1.0.0
^http[s]?:\/\/api.ttqww.com//api(/user/detail|/about/shanping|/home/notice|/home/video_detail).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Quantumultx-weiren/main/xmsp.js


[mitm]

hostname = *.ttqww.*

*/

var _0xe316=["\x62\x6F\x64\x79","\x75\x72\x6C","\x70\x61\x72\x73\x65","\x75\x73\x65\x72","\x73\x68\x61\x6E\x70\x69\x6E\x67","\x68\x6F\x6D\x65\x2F\x6E\x6F\x74\x69\x63\x65","\x76\x69\x64\x65\x6F\x5F\x64\x65\x74\x61\x69\x6C","\x69\x6E\x64\x65\x78\x4F\x66","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x5F\x63\x6F\x75\x70\x6F\x6E\x5F\x6E\x75\x6D\x62\x65\x72\x22\x3A\x39\x39\x39","\x72\x65\x70\x6C\x61\x63\x65","\x76\x69\x70\x22\x3A\x31","\x67\x6F\x6C\x64\x5F\x63\x6F\x69\x6E\x22\x3A\x22\x39\x39\x39\x38\x38\x30","\x69\x73\x5F\x73\x76\x69\x70\x22\x3A\x31","\x65\x6E\x64\x74\x69\x6D\x65\x22\x3A\x33\x32\x34\x39\x33\x38\x33\x34\x35\x34\x39","\x73\x6D\x61\x6C\x6C\x5F\x61\x76\x61\x74\x61\x72\x22\x3A\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2D\x75\x70\x79\x75\x6E\x2D\x69\x6D\x61\x67\x65\x73\x2E\x64\x75\x73\x68\x75\x33\x36\x35\x2E\x63\x6F\x6D\x2F\x31\x36\x33\x34\x37\x34\x30\x31\x32\x30\x63\x66\x37\x62\x38\x66\x34\x65\x36\x38\x64\x39\x32\x66\x37\x63\x34\x36\x36\x39\x36\x66\x63\x30\x32\x37\x63\x31\x36\x38\x31\x63\x70\x36\x76\x65\x39\x61\x22\x2C","\x6E\x69\x63\x6B\x22\x3A\x22\u4F1F\u4EBA\x22\x2C","\x64\x61\x74\x61","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x6F\x73\x74\x65\x72"]; var body=$response[_0xe316[0]]; var url=$request[_0xe316[1]]; var obj=JSON[_0xe316[2]](body); const p1=_0xe316[3]; const p2=_0xe316[4]; const p3=_0xe316[5]; const p4=_0xe316[6]; if(url[_0xe316[7]](p1)!= -1) { body= body[_0xe316[9]](/nick":"(.*?)",/g,_0xe316[15])[_0xe316[9]](/small_avatar":"(.*?)",/g,_0xe316[14])[_0xe316[9]](/endtime":\d+/g,_0xe316[13])[_0xe316[9]](/is_svip":\d/g,_0xe316[12])[_0xe316[9]](/gold_coin":"\d/g,_0xe316[11])[_0xe316[9]](/vip":\d/g,_0xe316[10])[_0xe316[9]](/download_coupon_number":\d/g,_0xe316[8])[_0xe316[9]](/movie_coupon_number":\d/g,_0xe316[8]) } if(url[_0xe316[7]](p2)!= -1) { delete obj[_0xe316[16]]; body= JSON[_0xe316[17]](obj) } if(url[_0xe316[7]](p3)!= -1) { delete obj[_0xe316[16]]; body= JSON[_0xe316[17]](obj) } if(url[_0xe316[7]](p4)!= -1) { delete obj[_0xe316[16]][_0xe316[18]]; body= JSON[_0xe316[17]](obj) } $done({body})

 
