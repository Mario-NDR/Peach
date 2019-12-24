<h1 align="center">
  network Detection and Response
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/node-10.12.0-brightgreen.svg" alt="flask version" data-canonical-src="https://img.shields.io/badge/node-10.12.0-brightgreen.svg" style="max-width:100%;">
  <img src="https://img.shields.io/badge/yarn-1.10.1-brightgreen.svg" alt="lin-cms version" data-canonical-src="https://img.shields.io/badge/yarn-1.10.1-brightgreen.svg" style="max-width:100%;">
  <img src="https://img.shields.io/badge/webpack-4.20.2-yellow.svg" alt="LISENCE" data-canonical-src="https://img.shields.io/badge/webpack-4.20.2-yellow.svg" style="max-width:100%;">
  <img src="https://img.shields.io/badge/react-16.5.2-yellow.svg" alt="LISENCE" data-canonical-src="https://img.shields.io/badge/react-16.5.2-yellow.svg" style="max-width:100%;">
  <img src="https://img.shields.io/badge/antd-3.13.2-yellow.svg" alt="LISENCE" data-canonical-src="https://img.shields.io/badge/antd-3.13.2-yellow.svg" style="max-width:100%;">
</p>

> Don't panic!

## 目录结构说明
```
.
├── README.md               说明文档
├── dist                    打包文件
├── node_modules            依赖包
├── package.json            项目配置信息
├── postcss.config.js       postcss配置
├── src                     源代码
├── webpack-config          webpack插件和加载器
├── webpack.config.js       webpack配置文件
└── yarn.lock               yarn依赖管理
```

## 启动开发环境
### 安装依赖：
``` bash
$ yarn
```
或者
``` bash
$ npm install
```
### 启动开发环境：
``` bash
$ npm start
```
### 浏览器访问：[点这里](http://127.0.0.1:9955)

## 打包
``` bash
$ npm run build
```

## docker后端镜像
``` bash
$ docker build -t mario .
$ docker run -it -p 5000:5000 -d mario
```
