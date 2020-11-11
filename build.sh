#!/bin/bash

function log() {
    echo "=============================================================="
    echo "$(date +'%Y-%m-%d %H:%M:%S%z') [INFO] - $@"
    echo ""
}

log "编译工程文件.."
npm install --registry=https://registry.npm.taobao.org
npm run build

log "压缩静态资源.."
tar zcvf dist.tar.gz dist

log "上传工程文件.."
scp dist.tar.gz root@101.91.115.0:~
rm dist.tar.gz

log "远程部署文件.."
ssh root@101.91.115.0 "tar zxvf dist.tar.gz && rm -rf /var/www/html && mv dist /var/www/html && systemctl restart nginx"

log "部署完成！"
