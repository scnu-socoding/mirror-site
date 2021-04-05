## SCNU SoCoding 软件源镜像服务

> 稳定、快速、现代的镜像服务，托管于与华南教育网骨干节点华南理工大学相距甚远的华南师范大学南海校区。

- 内网: https://mirrors-internal.socoding.cn/
- 外网: https://mirrors.socoding.cn/

本仓库用于存放镜像站前端视图文件（包含一个 NGINX Fancyindex 主题和站点首页导航）。

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

要部署镜像站首页，使用 `ln` 将 `index.html` 链接（当然也可直接复制）到站点根目录下。
