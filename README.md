# SCNU SoCoding Open Source Mirror

华南师范大学软件协会开源镜像站。

- https://mirrors-internal.socoding.cn/
- https://mirrors.socoding.cn/

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

注意 `index.html` 需要移动到根目录。
