@jinghh
  1、页面路由搭建好了，见：
    src/containers/README.md
    src/containers/Activity/README.md
  这两个README文件

  2、写页面的时候先观察一下设计图，是否有可抽离出来的公共组件。比如 src/containers/Activity/Create/Create.js 这个页面里面的面包屑导航和步骤条（<Bread /> & <Step />），很多页面都用到，就抽出来单独作为一个组件，放到 src/components 目录下。封装的时候参考这两个组件即可。

  3、开搞！