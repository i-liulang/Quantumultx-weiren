var body=$response['body'];var url=$request['url'];var obj=JSON['parse'](body);const p1='/getUserInfo';const p2='TeacherDetailInfo';if(url['indexOf'](p1)!=-0x1){obj['data']['is_vip']=0x2;obj['data']['username']='伟人破解';obj['data']['avatar']='https://cdn-upyun-images.dushu365.com/1634740120cf7b8f4e68d92f7c46696fc027c1681cp6ve9a';obj['data']['vip_expire_date']='2099-12-12';body=JSON['stringify'](obj);}if(url['indexOf'](p2)!=-0x1){obj['data']['is_vip']=0x2;body=JSON['stringify'](obj);}$done({'body':body});
