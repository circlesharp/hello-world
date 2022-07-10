# README

## install Nginx

将 windows 安装包直接复制到 `hello-nginx/nginx`  
要保留 `hello-nginx/nginx/conf`

配置 gitignore

```
hello-nginx/nginx/*
!hello-nginx/nginx/conf/
!hello-nginx/nginx/html/
```

## reload Nginx

```
cd nginx
.\nginx.exe -s reload
```
