## 安装
`apt-get install python-pip`
`pip install shadowsocks`

## 使用配置文件启动：

执行vim /etc/sss.json 添加如下内容：
```
{  
 "server":"0.0.0.0"，  
 "local_address": "127.0.0.1",  
 "local_port":1080,  
  "port_password": {  
     "8388": "password",  
     "8387": "password",  
     "8386": "password",  
     "8385": "password"  
 },  
 "timeout":300,  
 "method":"rc4-md5",  
 "fast_open": false  
}
```

## 启动
`ssserver -c /etc/sss.json -d start`

## 开机自启
编辑一下/etc/supervisord.conf文件，命令如下：

`vim /etc/supervisord.conf`
把下面的内容粘贴到文件尾部的空行处，然后保存：
```
[program:shadowsocks]
command=ssserver -c /etc/sss.json
autostart=true
autorestart=true
user=root
log_stderr=true
logfile=/var/log/shadowsocks.log
```
