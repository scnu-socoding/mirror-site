## SCNU SoCoding 软件源镜像服务

> ~~稳定、快速、现代~~的镜像服务，托管于与华南教育网骨干节点华南理工大学相距甚远的华南师范大学南海校区。

本仓库用于存放镜像站前端视图文件（NGINX Fancyindex 主题）。

如果需要部署，首先安装 NPM，然后 `npm install` 安装需要的依赖。

NGINX 配置示例如下：

```                                                                           
server {
        listen 9000;
        listen [::]:9000;
        access_log off;
        server_name ossmirror;
        charset utf-8,gbk;

        location / {
                alias /mnt/socoding/files/;
                fancyindex on;
                fancyindex_localtime on;
                fancyindex_exact_size off;
                fancyindex_header "/fancyindex/header.html";
                fancyindex_footer "/fancyindex/footer.html";
                fancyindex_ignore "favicon.ico";
                fancyindex_ignore "fancyindex";
                fancyindex_name_length 100;
        }
}
```
