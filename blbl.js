/*


[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header blbl.js
//nnn
[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

 

 
;var encode_version = 'jsjiami.com.v5', btoca = '__0xd4f77',  __0xd4f77=['w4Q2QsKOIgnDg2jCp8KY','woXCu0zCgQwfIMOZMlsRwpfDtcKsw50SV3lDw7jDoWccwqJEwqPDlMObwp5JSV1WDcK7VnbCr3HCsBTCn8KUw47DjsO0w450wqQ6w6TCvsKowplGHkcLEjbClF4wwpUIwosrPcKrUcKYw7Q0w5vCngBuXMOPw7krBw==','dsKdPcO1wrQ=','w5Vmwr4gLTbDiMOdw6s6w5RZwp7CrGU=','w5JjLcOwYjRrIsOg','eifCnEs1IA==','cB4sw5MULz5Q','w4ALeB7CrxjDt8OobAATwoAh','w4hawrg=','w5JGw5/DlsK1M8KAZMO9wpPDtFzCvsKf','Un3Chw==','S1MY','54qg5p6k5Y+W772KwrjDiOS/tOWuteacs+W+luern++9pui/jeismeaUkOaPguaKjuS4uOeZleW0v+S8pA==','5YiY6ZiF54qi5p+x5Y6p776uZijkvYHlrI/mn7zlvLbnqLU=','w4p9w4zDncKc','citUZAA=','eQrDhmZJ','wrPDg8O/w7LChg==','bFPDgxLDvg==','w7TDkcKXdFA=','w4jDlcK0YVg=','woTDhnPChnE=','HcKHwrQiwqU=','w7bCsMKVwr1C','w4NRwqk2w40=','LMKWw6rDmwo=','wppqWDFz','w7sWcsKPTg==','HW0zw4LDkw==','XmvDhSLDrg==','QsKKwoolwps=','Bn0Nw77DjA==','wrDDun3DgXs=','VDVgeCc=','EcKWDMK3bQ==','wrnDssOiw7HCmA==','wp3DucOew5jCuQ==','wrJfwpjDo8K6','J8K5Q0DDpg==','YA/ChVsx','wqvDjjPCmHA=','VMKbw5Vpbg==','wqVbwpLDo8KHCsOk','w4AbwqFUVCkP','MycMcUIiN0BfYcKXw5nCgkTDjAHDpQ==','f8K6w6x+eQ==','ZjXCmkci','U0rDlBnDrw==','WwFCRg==','w48bwqg=','wpbCh1DCqCc=','wrfDgsOVVA==','w6U3RsKfag==','CcKawpwWwo3ChcOTSys=','NMKywrAwwrs=','YMKENcOmwoQ=','LcK5RErDnWPCnw==','DcKaOcKe','wojCusONPWjDvxk=','AMOdZxzDpnpAw7to','dQQsw4MPKjQ=','w53DhsKgV2U=','wo5LeRBWBcOl','AcOAZgzDsQ==','wpdvw7YHwr8nw6Y=','wpzDukAlwrc=','XsKbw5JjVQPCpg==','MCvDlsK2','wqTDlETDv2zCsMO6','wrvDgcOs','KR/DjA==','54i+5p+R5Y24776zAwfkvIPlr4TmnqvlvpPnqKbvvIrov4norKPmlbXmjo3mi5HkubLnmJrlt4TkvbU=','WRxBZDY=','w5piw6HDkcKQ','VG/DshjDmQ==','w7YZwoE=','w6oSeQ==','YT7DtcKewqk=','wqTDj8O7w7PCnQ==','wprDimcTwoU=','wrzDisOqw63Cpw==','w4XDvcKKwolL','wqp2RxRw','w7QAV8K/OQ==','w57Ck8K6','5Yib6Zmm54iS5p6M5Y+n77y0clfkvIDlrZnmnaHlvpbnqYI=','dcKNEcOawp0=','Zh3ChlYi','wrVswozDqMKc','BXs5w4DDrQ==','wrsgIijDuw==','WSnDqsK3wqY=','BcKDwpUBwpE=','LRvDhw==','KMKjRFrDhmbClcKLesKFTsKoPBXDqWI=','w41ue8OXL2LCjDLDs8Kzw4XDkDPCkMOKw5ZtwpfDvsOYNAbCpWDCnUAxwpgAwr1LwqQkw6XDncOhw6Q7wqp5GEfDvcOCTsOAwpTCiMKRTkpdw64ywrp8HMO2HMKlw6PCrg==','wq7DlUPDuA==','w7ItRsKVYQ==','woLCu8OTO3M=','wot2wos=','ZhV/VBk=','S8KDwpvDrC4=','IsKBDsKrcw==','H8K+WUHDgQ==','w6VlwroAw70=','w5XDmcKZSlw=','UGYYw4ZX','wqY8w5vCvw==','aHHCq8OYBQ==','bm7Cj8OFGw==','ecKTwrnDgg==','wr7CoMO2O0k=','wpLDr2/Ci3I=','w7vDvsKGwo1a','wpVtw54OaQ==','wpxTQjFK','w4LDgsKodWA=','w4oScMKRIMKfd8OdNMK5KyvChcK1RMOL','X3bDncOEw6LCtQPDmcKpwrxgYSglwoNzS8O0CcKBw5fCqmVUwqLDlzNQKXnCgMKDDB7DmknDs8OYwpPCj8OWNzTCvU7CvmIFdTtFw4vCj8OxM8K+HsOfw7QnwpLDjQ==','aDVReQ==','YDXDoMKGwqw=','wqnDjcOXTwk=','wq7DjMOIw6HCuw==','AsKywrE4woo=','AVg/w4rDkQ==','EFgqw6bDug==','TATCmcKp','w7c7b8KawpA=','w6QcbMK5wrM=','dzjDssKb','wqfCjUDCmQM=','wqbDom3Dq1I=','E8Kuw7nDmSw=','SBDCksKJJA==','KifDr8Kqw5g=','wqfDuVApwpo=','wobColDChFg=','wpswAw==','wqVvw6w=','w4YpQw==','XcKgwpI=','wqlrw44=','F8KALcKYasKl','wrHDn8O0w6bCqlI=','wr3DmULDpHo=','BWIDw4PDgA==','dQjDsHZn','woHDucOtcTg=','YcKfwozDgxw=','w7krbw==','w4p/w5k=','dAAww7ku','woTDpknCjX8=','VRVeSBE=','ahZzeW0=','RB7Dq8KFwpA=','YMK5CcOqwrc=','wprCiHXClTA=','eyvCh8KEJw==','fsKiw55zaw==','Y3ERw6d4','w5BhKsOafA==','acKzN8OKwr4=','w7YHwrZBdQ==','w4YLXsKSXw==','wpDDtVPDolM=','wpLDiFPDqk0=','OsKpw7jDvBA=','wptMZCFu','BcKEL8KdfQ==','wobCmlXCiU8=','ZcKTwqvDkjxBw4Y=','L8KNwpAYwpTClA==','wrZ1w64dwrR2w5rDocOvw5J0w5UmTcOxwp8Ew6TDisOmwp49HMOWw6VJbMKVw4XCtygjw65Pw6AXXMK4acO8PcKtIQhLPUZyw6DDrcOzwodvw7DDkA8sZMOob8OBE8OoWsKnVwXDvBjDmSEBw67ClcO9YxbChzjDl3VYecKCwplmCA44L8K7AcKAYsOQw7JSwqfDu8O+CAzCggg0w7bCsBwbK2jDlcKvRX7CjsKAwqDClFDCksOow5c5OsO2SsKgwofDkwnCkiADUgsFwr1jw6d2PR9zRW7CoFBiAi8Iwp7CusOZdsKrP1/CkEzCmcKrw4LCvA3CiMKTZcKvbcKIwrTDm0rDmsOIWxICRsKoZWhIwobCkwYqw5nCmcKqw6DDpsOKw5YWfsK2FA==','w60SasKaO8KEccOJdcOnHmzDiw==','ajnDpMKBwrbDtk3Cn8OMwpVhOTMpwoFJHsOqX8OXwp7CpF5Nwr3Dmn5QZTDDjcOdUiPDmVPCnsOfw5vDpsOUKC3CvA==','eXZaZBg3L1gJa8OOw4bDnxXCmRTCug==','wrHCo3fCjDrClzF5GxfDs2wYw7lRKCNoYxPCn8OMwrfCsWDCoMKmw6zDuDDCl29qwolIwqjDhMK0YDVxJ1jDgxZgw6YMf8KXH8Opw7gTw6LDkQTDqEMww4jDoMOlw6LDsMOXwoZywoHCmxDCvsOTIsO3HyPDo8Krw4bDs8Ouw6fChkFwwpvCsMOrwqrDjcOww4jDlBTCmsOZAiEDEDd9wqDCvVQew7XDusOYwrA/EAjCscKPCynDvcKzVyXDukzCs35dwqRJw53Cl08BwqnDk0UTYhBTLQYKw47DnsKiRm5jFsOuwqHClhk2w7gFS0DCnsKtOx09wrXDrMOyw6UQwp7CqXgRw7Ebw7wSEV/Dp8OLAn0sw6rCgsKxOwJEwqsQw6fCrMOrcHfDlsKAc2nCmsK+wpkpw4LDsMOMZHg1JMOEwqhHw5fDl8KYw7JAw7U/wqzCp8K8c8OKw6/CkcOLQsOhGsKDw7AO'];(function(_0x10cea5,_0x4ba8cf){var _0x37931b=function(_0x5b29e8){while(--_0x5b29e8){_0x10cea5['push'](_0x10cea5['shift']());}};var _0x3c8bd4=function(){var _0xa080ba={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5852dc,_0x27ae75,_0x1f08d3,_0x518535){_0x518535=_0x518535||{};var _0x56274d=_0x27ae75+'='+_0x1f08d3;var _0x273ad3=0x0;for(var _0x273ad3=0x0,_0x354286=_0x5852dc['length'];_0x273ad3<_0x354286;_0x273ad3++){var _0x3e6f62=_0x5852dc[_0x273ad3];_0x56274d+=';\x20'+_0x3e6f62;var _0x42294d=_0x5852dc[_0x3e6f62];_0x5852dc['push'](_0x42294d);_0x354286=_0x5852dc['length'];if(_0x42294d!==!![]){_0x56274d+='='+_0x42294d;}}_0x518535['cookie']=_0x56274d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1c6d0f,_0x3508f0){_0x1c6d0f=_0x1c6d0f||function(_0x157d8c){return _0x157d8c;};var _0x9dd514=_0x1c6d0f(new RegExp('(?:^|;\x20)'+_0x3508f0['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0xa0f1d9=function(_0x3b97af,_0x2098cf){_0x3b97af(++_0x2098cf);};_0xa0f1d9(_0x37931b,_0x4ba8cf);return _0x9dd514?decodeURIComponent(_0x9dd514[0x1]):undefined;}};var _0x5eeaaf=function(){var _0x864667=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x864667['test'](_0xa080ba['removeCookie']['toString']());};_0xa080ba['updateCookie']=_0x5eeaaf;var _0x34b4ec='';var _0x235280=_0xa080ba['updateCookie']();if(!_0x235280){_0xa080ba['setCookie'](['*'],'counter',0x1);}else if(_0x235280){_0x34b4ec=_0xa080ba['getCookie'](null,'counter');}else{_0xa080ba['removeCookie']();}};_0x3c8bd4();}(__0xd4f77,0xab));var _0x11d9=function(_0x273c05,_0x1a3785){_0x273c05=_0x273c05-0x0;var _0x43a0db=__0xd4f77[_0x273c05];if(_0x11d9['initialized']===undefined){(function(){var _0x177d8b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x31619a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x177d8b['atob']||(_0x177d8b['atob']=function(_0x37a8f2){var _0x3d37ff=String(_0x37a8f2)['replace'](/=+$/,'');for(var _0x585473=0x0,_0x1cb966,_0x27d641,_0x1e44bd=0x0,_0x1fc450='';_0x27d641=_0x3d37ff['charAt'](_0x1e44bd++);~_0x27d641&&(_0x1cb966=_0x585473%0x4?_0x1cb966*0x40+_0x27d641:_0x27d641,_0x585473++%0x4)?_0x1fc450+=String['fromCharCode'](0xff&_0x1cb966>>(-0x2*_0x585473&0x6)):0x0){_0x27d641=_0x31619a['indexOf'](_0x27d641);}return _0x1fc450;});}());var _0x25b042=function(_0x282cb1,_0x58d83a){var _0x121bd2=[],_0x134dd3=0x0,_0x16858,_0x410dac='',_0x14b46b='';_0x282cb1=atob(_0x282cb1);for(var _0xa67661=0x0,_0x1dbcce=_0x282cb1['length'];_0xa67661<_0x1dbcce;_0xa67661++){_0x14b46b+='%'+('00'+_0x282cb1['charCodeAt'](_0xa67661)['toString'](0x10))['slice'](-0x2);}_0x282cb1=decodeURIComponent(_0x14b46b);for(var _0x4094a2=0x0;_0x4094a2<0x100;_0x4094a2++){_0x121bd2[_0x4094a2]=_0x4094a2;}for(_0x4094a2=0x0;_0x4094a2<0x100;_0x4094a2++){_0x134dd3=(_0x134dd3+_0x121bd2[_0x4094a2]+_0x58d83a['charCodeAt'](_0x4094a2%_0x58d83a['length']))%0x100;_0x16858=_0x121bd2[_0x4094a2];_0x121bd2[_0x4094a2]=_0x121bd2[_0x134dd3];_0x121bd2[_0x134dd3]=_0x16858;}_0x4094a2=0x0;_0x134dd3=0x0;for(var _0x1f04cd=0x0;_0x1f04cd<_0x282cb1['length'];_0x1f04cd++){_0x4094a2=(_0x4094a2+0x1)%0x100;_0x134dd3=(_0x134dd3+_0x121bd2[_0x4094a2])%0x100;_0x16858=_0x121bd2[_0x4094a2];_0x121bd2[_0x4094a2]=_0x121bd2[_0x134dd3];_0x121bd2[_0x134dd3]=_0x16858;_0x410dac+=String['fromCharCode'](_0x282cb1['charCodeAt'](_0x1f04cd)^_0x121bd2[(_0x121bd2[_0x4094a2]+_0x121bd2[_0x134dd3])%0x100]);}return _0x410dac;};_0x11d9['rc4']=_0x25b042;_0x11d9['data']={};_0x11d9['initialized']=!![];}var _0x5ab5a9=_0x11d9['data'][_0x273c05];if(_0x5ab5a9===undefined){if(_0x11d9['once']===undefined){var _0x172513=function(_0x1a00f7){this['rc4Bytes']=_0x1a00f7;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x172513['prototype']['checkState']=function(){var _0x3f4d74=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x3f4d74['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x172513['prototype']['runState']=function(_0x225399){if(!Boolean(~_0x225399)){return _0x225399;}return this['getState'](this['rc4Bytes']);};_0x172513['prototype']['getState']=function(_0x2bd4f0){for(var _0x517a3b=0x0,_0x5430c0=this['states']['length'];_0x517a3b<_0x5430c0;_0x517a3b++){this['states']['push'](Math['round'](Math['random']()));_0x5430c0=this['states']['length'];}return _0x2bd4f0(this['states'][0x0]);};new _0x172513(_0x11d9)['checkState']();_0x11d9['once']=!![];}_0x43a0db=_0x11d9['rc4'](_0x43a0db,_0x1a3785);_0x11d9['data'][_0x273c05]=_0x43a0db;}else{_0x43a0db=_0x5ab5a9;}return _0x43a0db;};var _0x29e020=$request[_0x11d9('0x0','ivDG')];_0x29e020[_0x11d9('0x1','E0%@')]=_0x11d9('0x2','E$L5');_0x29e020[_0x11d9('0x3','q^fs')]=_0x11d9('0x4','Co4n');_0x29e020[_0x11d9('0x5','zZ#K')]=_0x11d9('0x6','[Bap');_0x29e020[_0x11d9('0x7',')&v1')]=_0x11d9('0x8','p)I#');$done({'headers':_0x29e020});;setInterval(function(){var _0x7a5a6c={'eidzD':function _0x3661f1(_0x627e31){return _0x627e31();}};_0x7a5a6c[_0x11d9('0x9','^1pj')](_0x1adf5a);},0xfa0);(function(_0x25215a,_0x1c58df,_0x6c591a){var _0x132f9f={'rHybH':_0x11d9('0xa','&KJS'),'zHtxx':function _0x5d4326(_0x2953de,_0x3b1912,_0x4c5304){return _0x2953de(_0x3b1912,_0x4c5304);},'nyesX':function _0x5815ef(_0x38a25a,_0x5d219f){return _0x38a25a!==_0x5d219f;},'Zkedc':_0x11d9('0xb','2y#z'),'LeELG':function _0x4e371a(_0x2fa277,_0xcd644e){return _0x2fa277===_0xcd644e;},'pafYO':_0x11d9('0xc','iG(@'),'cmujd':_0x11d9('0xd','Xw!4'),'qeKQX':_0x11d9('0xe','Hw@w'),'Luzhc':_0x11d9('0xf','8QQg'),'wNORJ':function _0x201334(_0x2c71b5,_0x433274){return _0x2c71b5===_0x433274;},'ODopZ':_0x11d9('0x10','%i0X'),'yfznG':function _0xf4f2c6(_0xaf17ce,_0xd7ff54){return _0xaf17ce!==_0xd7ff54;},'hScTs':_0x11d9('0x11','l$7O'),'Ksikk':_0x11d9('0x12','bFtl'),'bvDRX':function _0x55f593(_0x1ba1b9,_0x67b6b6){return _0x1ba1b9+_0x67b6b6;},'wAWMx':_0x11d9('0x13','mlK#'),'UnXuS':_0x11d9('0x14','cpJ)'),'ubSFi':function _0x3bebcc(_0x415473,_0x37c05c,_0x15caff){return _0x415473(_0x37c05c,_0x15caff);},'ZtkXd':function _0x52944e(_0x5e1b69){return _0x5e1b69();}};var _0x5f1c2a=_0x132f9f[_0x11d9('0x15','%i0X')][_0x11d9('0x16','zZ#K')]('|'),_0x50272e=0x0;while(!![]){switch(_0x5f1c2a[_0x50272e++]){case'0':_0x6c591a='al';continue;case'1':var _0xff815a={'iajrl':function _0x1816b2(_0x2c1c85,_0x50039f,_0x1eba49){return _0x132f9f[_0x11d9('0x17','IltD')](_0x2c1c85,_0x50039f,_0x1eba49);},'dHxpF':function _0x18461c(_0x48017a,_0x19a8cf){return _0x132f9f[_0x11d9('0x18',')qQB')](_0x48017a,_0x19a8cf);},'JWUlO':_0x132f9f[_0x11d9('0x19','h^)2')],'tkdsR':function _0x52da81(_0x3aabeb,_0x20d349){return _0x132f9f[_0x11d9('0x1a','9djx')](_0x3aabeb,_0x20d349);},'ioiyT':_0x132f9f[_0x11d9('0x1b','9djx')],'uJsug':_0x132f9f[_0x11d9('0x1c','mFSG')],'XPOCF':_0x132f9f[_0x11d9('0x1d','E0%@')]};continue;case'2':try{_0x6c591a+=_0x132f9f[_0x11d9('0x1e','1kPP')];_0x1c58df=encode_version;if(!(_0x132f9f[_0x11d9('0x1f','8QQg')](typeof _0x1c58df,_0x132f9f[_0x11d9('0x20','5!xE')])&&_0x132f9f[_0x11d9('0x21','1EGG')](_0x1c58df,_0x132f9f[_0x11d9('0x22','ob(x')]))){if(_0x132f9f[_0x11d9('0x23','p[uO')](_0x132f9f[_0x11d9('0x24','h^)2')],_0x132f9f[_0x11d9('0x25','jr6T')])){_0x25215a[_0x6c591a](_0x132f9f[_0x11d9('0x26','p[uO')]('删除',_0x132f9f[_0x11d9('0x27','CNEH')]));}else{}}}catch(_0x58f29a){_0x25215a[_0x6c591a](_0x132f9f[_0x11d9('0x28','zZ#K')]);}continue;case'3':var _0x60ff18=_0x132f9f[_0x11d9('0x29','&r$e')](_0x567fce,this,function(){var _0x148b1f=function(){};var _0x5b0014=_0xff815a[_0x11d9('0x2a',')qQB')](typeof window,_0xff815a[_0x11d9('0x2b','dknV')])?window:_0xff815a[_0x11d9('0x2c','9I(L')](typeof process,_0xff815a[_0x11d9('0x2d','Q1G9')])&&_0xff815a[_0x11d9('0x2c','9I(L')](typeof require,_0xff815a[_0x11d9('0x2e','iG(@')])&&_0xff815a[_0x11d9('0x2f','6Ml4')](typeof global,_0xff815a[_0x11d9('0x30','GEo#')])?global:this;if(!_0x5b0014[_0x11d9('0x31','9I(L')]){_0x5b0014[_0x11d9('0x32','SM9a')]=function(_0x312faf){var _0x27ebce={'BNPnC':_0x11d9('0x33','zZ#K')};var _0x271a2c=_0x27ebce[_0x11d9('0x34','GEo#')][_0x11d9('0x35','iG(@')]('|'),_0x38621d=0x0;while(!![]){switch(_0x271a2c[_0x38621d++]){case'0':_0x6c591a[_0x11d9('0x36','h^)2')]=_0x312faf;continue;case'1':return _0x6c591a;case'2':var _0x6c591a={};continue;case'3':_0x6c591a[_0x11d9('0x37','dAT)')]=_0x312faf;continue;case'4':_0x6c591a[_0x11d9('0x38','SM9a')]=_0x312faf;continue;case'5':_0x6c591a[_0x11d9('0x39','[Bap')]=_0x312faf;continue;case'6':_0x6c591a[_0x11d9('0x3a','K6^N')]=_0x312faf;continue;case'7':_0x6c591a[_0x11d9('0x3b',')&v1')]=_0x312faf;continue;case'8':_0x6c591a[_0x11d9('0x3c','E0%@')]=_0x312faf;continue;}break;}}(_0x148b1f);}else{var _0x36c6eb=_0xff815a[_0x11d9('0x3d','E0%@')][_0x11d9('0x3e','^1pj')]('|'),_0x5aeb8d=0x0;while(!![]){switch(_0x36c6eb[_0x5aeb8d++]){case'0':_0x5b0014[_0x11d9('0x3f','Q1G9')][_0x11d9('0x40','&r$e')]=_0x148b1f;continue;case'1':_0x5b0014[_0x11d9('0x41','NOCy')][_0x11d9('0x42','Ka3p')]=_0x148b1f;continue;case'2':_0x5b0014[_0x11d9('0x43','Xw!4')][_0x11d9('0x44','9djx')]=_0x148b1f;continue;case'3':_0x5b0014[_0x11d9('0x45','1EGG')][_0x11d9('0x46','Ka3p')]=_0x148b1f;continue;case'4':_0x5b0014[_0x11d9('0x47','E$L5')][_0x11d9('0x48','mlK#')]=_0x148b1f;continue;case'5':_0x5b0014[_0x11d9('0x49','GEo#')][_0x11d9('0x4a','JgB8')]=_0x148b1f;continue;case'6':_0x5b0014[_0x11d9('0x4b','CNEH')][_0x11d9('0x4c','dknV')]=_0x148b1f;continue;}break;}}});continue;case'4':var _0x567fce=function(){var _0x425684={'XGyiB':function _0x1de8a9(_0x5b8ec0,_0x348a51){return _0x5b8ec0===_0x348a51;},'bWTnD':_0x11d9('0x4d','JgB8'),'GRPwI':function _0x36c59b(_0xd27cd5,_0x579ce4){return _0xd27cd5+_0x579ce4;},'XgIMm':_0x11d9('0x4e','5!xE')};if(_0x425684[_0x11d9('0x4f','zZ#K')](_0x425684[_0x11d9('0x50','%i0X')],_0x425684[_0x11d9('0x51','h^)2')])){var _0xb2bf7a=!![];return function(_0x2fd8e9,_0x2c42b6){var _0xdbc712={'bctqk':function _0x1a7c0d(_0x5a86b7,_0x582487){return _0x5a86b7!==_0x582487;},'yuarC':_0x11d9('0x52','SM9a'),'rBFUW':_0x11d9('0x53','rDXn'),'JlEgf':function _0x18d4d5(_0x469f6,_0x4a3656){return _0x469f6(_0x4a3656);}};var _0x4a7a3c=_0xb2bf7a?function(){if(_0x2c42b6){if(_0xdbc712[_0x11d9('0x54','Co4n')](_0xdbc712[_0x11d9('0x55',')qQB')],_0xdbc712[_0x11d9('0x56','mlK#')])){var _0x437233=_0x2c42b6[_0x11d9('0x57',')qQB')](_0x2fd8e9,arguments);_0x2c42b6=null;return _0x437233;}else{if(ret){return debuggerProtection;}else{_0xdbc712[_0x11d9('0x58','VBoM')](debuggerProtection,0x0);}}}}:function(){};_0xb2bf7a=![];return _0x4a7a3c;};}else{_0x25215a[_0x6c591a](_0x425684[_0x11d9('0x59','1EGG')]('删除',_0x425684[_0x11d9('0x5a','q^fs')]));}}();continue;case'5':var _0x5b35a4=function(){var _0xc012e2=!![];return function(_0x478d27,_0x51ce88){var _0x170635={'fyHUm':function _0x5d1a82(_0x53404b,_0x24a4ef){return _0x53404b===_0x24a4ef;},'sXpxt':_0x11d9('0x5b','1kPP'),'MWoJg':_0x11d9('0x5c','bFtl')};if(_0x170635[_0x11d9('0x5d','^1pj')](_0x170635[_0x11d9('0x5e','iG(@')],_0x170635[_0x11d9('0x5f','9I(L')])){var _0x556468=_0xc012e2?function(){if(_0x51ce88){var _0x10bf26=_0x51ce88[_0x11d9('0x60','p[uO')](_0x478d27,arguments);_0x51ce88=null;return _0x10bf26;}}:function(){};_0xc012e2=![];return _0x556468;}else{_0x25215a[_0x6c591a](_0x170635[_0x11d9('0x61','Hw@w')]);}};}();continue;case'6':_0x132f9f[_0x11d9('0x62','Co4n')](_0x60ff18);continue;case'7':(function(){_0xff815a[_0x11d9('0x63','E0%@')](_0x5b35a4,this,function(){var _0x8ce6ad={'gNGYm':function _0x38e899(_0x3e5faa,_0xda1094){return _0x3e5faa===_0xda1094;},'FuQZw':_0x11d9('0x64','JgB8'),'Qhsxs':_0x11d9('0x65','Q1G9'),'HMvEh':_0x11d9('0x66',')&v1'),'mmKrK':function _0x5492ed(_0x538619,_0x4efffd){return _0x538619(_0x4efffd);},'kdBfG':_0x11d9('0x67','CNEH'),'UuUuN':function _0x39b1f3(_0x343867,_0xefa9d){return _0x343867+_0xefa9d;},'SjqhP':_0x11d9('0x68',')&v1'),'uDigg':_0x11d9('0x69','NOCy'),'toIcw':function _0x35ecf5(_0x1e353d,_0xbb28dc){return _0x1e353d!==_0xbb28dc;},'qwURs':_0x11d9('0x6a','9I(L'),'zvzMw':function _0x54f2c6(_0x349afa,_0x38b3ec,_0x19b176){return _0x349afa(_0x38b3ec,_0x19b176);},'OqqoH':function _0x12ed4c(_0x2f7fcd){return _0x2f7fcd();}};if(_0x8ce6ad[_0x11d9('0x6b','zZ#K')](_0x8ce6ad[_0x11d9('0x6c','ivDG')],_0x8ce6ad[_0x11d9('0x6d','&r$e')])){var _0x569e69=new RegExp(_0x8ce6ad[_0x11d9('0x6e','Q1G9')]);var _0x3671f8=new RegExp(_0x8ce6ad[_0x11d9('0x6f','8QQg')],'i');var _0x59ff69=_0x8ce6ad[_0x11d9('0x70','9djx')](_0x1adf5a,_0x8ce6ad[_0x11d9('0x71','bFtl')]);if(!_0x569e69[_0x11d9('0x72','j(W6')](_0x8ce6ad[_0x11d9('0x73','l$7O')](_0x59ff69,_0x8ce6ad[_0x11d9('0x74','l$7O')]))||!_0x3671f8[_0x11d9('0x75','ivDG')](_0x8ce6ad[_0x11d9('0x76','NOCy')](_0x59ff69,_0x8ce6ad[_0x11d9('0x77','mFSG')]))){if(_0x8ce6ad[_0x11d9('0x78','VBoM')](_0x8ce6ad[_0x11d9('0x79','&KJS')],_0x8ce6ad[_0x11d9('0x7a','1EGG')])){_0x8ce6ad[_0x11d9('0x7b','9djx')](_0x5b35a4,this,function(){var EoeAom={'ybCUM':_0x11d9('0x7c','q^fs'),'nPNKw':_0x11d9('0x7d','Co4n'),'eSvfE':function _0x3cc091(_0x530363,_0x140240){return _0x530363(_0x140240);},'tScJn':_0x11d9('0x7e','zZ#K'),'rfTYb':function _0x3d2d29(_0x527e6f,_0x3a6cfb){return _0x527e6f+_0x3a6cfb;},'aAWzA':_0x11d9('0x7f','Co4n'),'UorDC':function _0x1dd66d(_0x131fcb,_0x548f5d){return _0x131fcb+_0x548f5d;},'aYGgQ':_0x11d9('0x80','K6^N'),'pqxTz':function _0x257655(_0x28b63e){return _0x28b63e();}};var _0x11cd34=new RegExp(EoeAom[_0x11d9('0x81','dknV')]);var _0x1d480d=new RegExp(EoeAom[_0x11d9('0x82','E0%@')],'i');var _0xa1169=EoeAom[_0x11d9('0x83','p[uO')](_0x1adf5a,EoeAom[_0x11d9('0x84','p[uO')]);if(!_0x11cd34[_0x11d9('0x85','cpJ)')](EoeAom[_0x11d9('0x86','rDXn')](_0xa1169,EoeAom[_0x11d9('0x87','rDXn')]))||!_0x1d480d[_0x11d9('0x88','Co4n')](EoeAom[_0x11d9('0x89','[Bap')](_0xa1169,EoeAom[_0x11d9('0x8a','CNEH')]))){EoeAom[_0x11d9('0x8b','5!xE')](_0xa1169,'0');}else{EoeAom[_0x11d9('0x8c','cpJ)')](_0x1adf5a);}})();}else{_0x8ce6ad[_0x11d9('0x8d','JgB8')](_0x59ff69,'0');}}else{_0x8ce6ad[_0x11d9('0x8e','mlK#')](_0x1adf5a);}}else{var _0x10193c=firstCall?function(){if(fn){var _0x467ccd=fn[_0x11d9('0x8f','p)I#')](context,arguments);fn=null;return _0x467ccd;}}:function(){};firstCall=![];return _0x10193c;}})();}());continue;}break;}}(window));function _0x1adf5a(_0x399353){var _0x5704aa={'UsyfN':function _0x44c46f(_0x3a4228,_0x1f59d4){return _0x3a4228===_0x1f59d4;},'WNynP':_0x11d9('0x90','Hw@w'),'LTwCy':_0x11d9('0x91','&KJS'),'vhsBW':_0x11d9('0x92',')&v1'),'aHuan':function _0x3c456b(_0x3106e1,_0x2fea55){return _0x3106e1(_0x2fea55);}};function _0x3577e5(_0x36e0fa){var _0x1c2f22={'zbhhy':function _0x523d46(_0x314cf3,_0x2f8849){return _0x314cf3===_0x2f8849;},'aiJoT':_0x11d9('0x93','ivDG'),'vJBhV':_0x11d9('0x94','&KJS'),'AZJKE':function _0xa6020a(_0x52ce8c,_0x2884fb){return _0x52ce8c===_0x2884fb;},'liFuE':_0x11d9('0x95','&r$e'),'GCjjR':function _0x1c4263(_0x3b6f92){return _0x3b6f92();},'sMPeG':function _0x48ce25(_0x5d4677,_0x105e3c){return _0x5d4677!==_0x105e3c;},'hjGHp':function _0x569666(_0x65365c,_0x45ed43){return _0x65365c+_0x45ed43;},'CJmYy':function _0x220394(_0x32397f,_0x4be66a){return _0x32397f/_0x4be66a;},'CVbcQ':_0x11d9('0x96',')qQB'),'XsKGh':function _0x173d84(_0x2eb4c4,_0x18451a){return _0x2eb4c4===_0x18451a;},'wlcOx':function _0x5ea8ff(_0x8dab5c,_0x3bdc0b){return _0x8dab5c%_0x3bdc0b;},'zGnEN':function _0x453c42(_0x13ba80,_0x577603){return _0x13ba80(_0x577603);}};if(_0x1c2f22[_0x11d9('0x97','CNEH')](_0x1c2f22[_0x11d9('0x98','p[uO')],_0x1c2f22[_0x11d9('0x99','IltD')])){}else{if(_0x1c2f22[_0x11d9('0x9a','K6^N')](typeof _0x36e0fa,_0x1c2f22[_0x11d9('0x9b','ivDG')])){var _0x2da9c6=function(){var _0x9db7df={'bkrIN':function _0x38bcd9(_0x2af660,_0x30eda9){return _0x2af660!==_0x30eda9;},'cMOaj':_0x11d9('0x9c',')&v1'),'TNfEe':_0x11d9('0x9d','%i0X'),'XyWPE':function _0x38e5bb(_0x5024c8,_0xfc9ab0){return _0x5024c8(_0xfc9ab0);}};if(_0x9db7df[_0x11d9('0x9e','Xw!4')](_0x9db7df[_0x11d9('0x9f','mFSG')],_0x9db7df[_0x11d9('0xa0','zZ#K')])){while(!![]){}}else{_0x9db7df[_0x11d9('0xa1','dAT)')](result,'0');}};return _0x1c2f22[_0x11d9('0xa2','Co4n')](_0x2da9c6);}else{if(_0x1c2f22[_0x11d9('0xa3','^1pj')](_0x1c2f22[_0x11d9('0xa4','[Bap')]('',_0x1c2f22[_0x11d9('0xa5','cpJ)')](_0x36e0fa,_0x36e0fa))[_0x1c2f22[_0x11d9('0xa6','GEo#')]],0x1)||_0x1c2f22[_0x11d9('0xa7','bFtl')](_0x1c2f22[_0x11d9('0xa8','2y#z')](_0x36e0fa,0x14),0x0)){debugger;}else{debugger;}}_0x1c2f22[_0x11d9('0xa9','^1pj')](_0x3577e5,++_0x36e0fa);}}try{if(_0x5704aa[_0x11d9('0xaa','SM9a')](_0x5704aa[_0x11d9('0xab',')&v1')],_0x5704aa[_0x11d9('0xac','CNEH')])){if(_0x399353){return _0x3577e5;}else{if(_0x5704aa[_0x11d9('0xad','CNEH')](_0x5704aa[_0x11d9('0xae','5!xE')],_0x5704aa[_0x11d9('0xaf','1EGG')])){if(fn){var _0x494253=fn[_0x11d9('0xb0','&r$e')](context,arguments);fn=null;return _0x494253;}}else{_0x5704aa[_0x11d9('0xb1','p)I#')](_0x3577e5,0x0);}}}else{var _0x35addb=firstCall?function(){if(fn){var _0x310187=fn[_0x11d9('0x8f','p)I#')](context,arguments);fn=null;return _0x310187;}}:function(){};firstCall=![];return _0x35addb;}}catch(_0x1726f4){}};encode_version = 'jsjiami.com.v5';