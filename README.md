## 前后端分离之前端框架

### 工程名称

  ######                                  web-refactor

### 项目介绍

  #####    工程是通过SVN来管理的，无法通过git钩子来控制服务器上的代码质量，在svn 上提交代码的时候保证本地环境编译通过!
  #####    工程是通过SVN来管理的，无法通过git钩子来控制服务器上的代码质量，在svn 上提交代码的时候保证本地环境编译通过!
  #####    工程是通过SVN来管理的，无法通过git钩子来控制服务器上的代码质量，在svn 上提交代码的时候保证本地环境编译通过!

### 软硬环境

### 研发环境

  1. 操作系统: Windows | Mac OS
  2. 推荐IDE: Visual Studio Code | WebStorm
  3. 浏览器:  Edge12+ | Chrome 65+ | Firefox 60+

### 部署环境

  1. 服务器端部署方案一: nginx 1.14, (备注: 需要配置反向代理, 指向后端服务)
  2. 服务器端部署方案二: node 8.11.3 配合 pm2 2.10 (备注: pm2是node的进程管理工具)
  3. 服务器端部署方案三: 将前端构建后的dist目录放置在Tomcat/Webapps/ROOT/目录下
  3. 浏览器端: 优先推荐客户使用chrome等高版本浏览器进行访问 (备注: 为了满足客户对于展示和交互日渐提高的要求)

### 浏览器兼容性

    Edge 12+   Firefox 55+    Chrome 60+    Safari 10+

### 框架构成

    vue-cli3 + vue2 + vue-router3 + vuex3 + element-ui2

### 环境安装

 本项目依赖 node.js， 使用前先安装 node.js 和 cnpm（显著提升依赖包的下载速度）。

 1. 自行下载并安装 node.js:

        https://nodejs.org/en/download/

 2. 然后安装 cnpm 命令(安装 cnpm 提高安装速度):

        npm install -g cnpm --registry=https://registry.npm.taobao.org

        或者

        npm install node-sass --registry=http://registry.npm.taobao.org

 3. 安装依赖

        npm install 或者 cnpm install

 4. 执行构建并启动服务

        npm start   |  npm run serve

### 基础命令


 ##### 开发构建 + 启动服务器

        npm start  |  npm run serve

 ##### 开发构建

        npm run build

 ##### 代码检查

        npm run lint
