var body=$response['body'];var url=$request['url'];var obj=JSON['parse'](body);const p1='Account/IndexDetail';const p2='movie/DetailInfo';const p3='movie/watch';if(url['indexOf'](p1)!=-0x1){obj['nickName']='伟人破解';obj['headPortrait']='https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a';obj['rewardBadge']=!![];obj['vipLevel']=0x3;obj['vipEndTime']='2999-09-09';obj['cartoonVip']=!![];obj['cartoonVipEndTime']=!![];body=JSON['stringify'](obj);$notify('会员注入成功!');}if(url['indexOf'](p2)!=-0x1){obj['movie']['isFree']=!![];body=JSON['stringify'](obj);$notify('播放地址获取成功!');}if(url['indexOf'](p3)!=-0x1){obj['hadWatch']=!![];obj['canWatch']=!![];body=JSON['stringify'](obj);$notify('播放权限获取成功!');}$done({'body':body});
