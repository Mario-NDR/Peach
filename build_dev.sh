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
scp dist.tar.gz ol@10.11.11.30:~
rm dist.tar.gz

log "远程部署文件.."
ssh ol@10.11.11.30 "tar zxvf dist.tar.gz && rm -rf /opt/common_dockers/web_app/common/www && mv dist /opt/common_dockers/web_app/common/www && cd /opt/common_dockers/web_app/ && sudo make build-dev && sudo make install-dev"

log "部署完成！"
