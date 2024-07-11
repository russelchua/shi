# 使用官方 httpd 映像作為基礎
FROM httpd:2.4

# 複製 Vue 應用的構建文件到 httpd 的服務目錄
COPY /home/russel/builds/xPkshrAqM/0/mega_cloud_counter/mega_cloud_counter/repo/shi/dist/apps/shi /usr/local/apache2/htdocs/

# 複製自定義的 httpd 配置文件（如果需要的話）
# COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

# 暴露 80 端口
EXPOSE 80

# httpd 映像會自動啟動 Apache，所以不需要額外的 CMD 指令