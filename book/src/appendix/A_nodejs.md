# Node.js & Yarn

本节简单介绍一下 Node.js 和 Yarn 的安装与使用

## Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，我们写好的 JavaScript 代码将使用 Node.js 执行。

更具体的

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
- Node.js 使用了一个**事件驱动**、**非阻塞式 I/O**的模型，使其轻量又高效。
  - 具体解释
    - Node.js 是单线程的
    - 但是每做一次 IO，在 IO 的同时还可以继续进行别的事情的处理
    - 即 IO 并不会阻塞主线程
  - 举个栗子：每当进行某项功能的时候的时候，A 函数会被调用，访问一个网上的资源，由于网络延迟，3s 后才会获得返回值。我们连续调用 100 次功能看看
    - C/C++/Java 的同步实现，至少需要 3s\*100=300s
    - C/C++/Java 的多线程，需要至少需要 3s\*100/线程数量
    - Node.js 仅需要比 3s 多一点的时间
- Node.js 的语法就是 JavaScript 的语法。

最初的 JavaScript 被设计为浏览器内使用的**脚本语言**，方便用户使用浏览器。而有了 Node.js，JavaScript 便可以脱离浏览器运行，进而可以用于前端、后端甚至开发桌面软件。

可以从以下链接获取安装包：

- [官方网站](https://nodejs.org/en/download/)
- [清华 tuna 镜像](https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/)
  - [tuna 镜像帮助页面](https://mirrors.tuna.tsinghua.edu.cn/help/nodejs-release/)
- [北京外国语大学镜像](https://mirrors.bfsu.edu.cn/nodejs-release/)
  - [北外镜像帮助页面](https://mirrors.bfsu.edu.cn/help/nodejs-release/)

推荐使用尽可能新的长期支持版本，具体安装步骤可以参考[（略过时的）菜鸟教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)。

由于我们目前尚不需要使用 nvm（Node Version Manager）对 Node.js 进行版本管理，有需要的可以自行搜索学习。

安装完 Node.js 后，也一并安装完了 npm（Node Package Manager），可以使用`npm install`安装需要的 JavaScript 包。

由于各种原因，推荐使用淘宝镜像对 npm 进行加速

```bash
npm config set registry https://registry.npm.taobao.org
```

npm 是包管理和分发工具，即可以实现：

- 允许用户从 NPM 服务器下载别人编写的第三方包到本地使用。
- 允许用户从 NPM 服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到 NPM 服务器供别人使用。

使用 npm 进行管理依赖于`package.json`文件，可以通过此文件快速安装或共享需要的依赖版本，也可以确定一些开发时需要用到的命令和开发项目的信息。由于我们主要使用 Yarn 进行包管理，感兴趣的同学可以自行搜索并学习 npm 的相关知识。

## Yarn

Yarn 是比 npm（相对）更好的依赖管理工具，[官网](https://yarn.bootcss.com/docs/getting-started/)。可以使用 npm 进行安装

```bash
npm install -g yarn
```

由于各种原因，推荐使用淘宝镜像对 yarn 进行加速

```bash
yarn config set registry https://registry.npm.taobao.org
```

与 npm 类似，yarn 也使用`package.json`确定依赖版本。不过相比曾经的 npm（最新的 npm 会默认使用`package-lock.json`）会默认多加一个`yarn.lock`用来确定精确的版本。

在`package.json`中，版本是这样列出的：

```
"5.0.3"
"~5.0.3"
"^5.0.3"
```

- “5.0.3”表示安装指定的 5.0.3 版本
- “~5.0.3”表示安装 5.0.X 中最新的版本
- “^5.0.3”表示安装 5.X.X 中的最新版本。

这样可能会造成安装的依赖版本更新，且恰好遇到了**breaking change**直接导致无法正常运行。而`yarn.lock`中则会写明具体的版本、依赖、使用的源的地址

```
"@ant-design/colors@^3.1.0":
  version "xxx"
  resolved "xxx"
  integrity xxx
  dependencies:
    xxx
```

### 常用命令

初始化一个新项目

```
yarn init
```

添加依赖包

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

将依赖项添加到不同依赖项类别中

分别添加到 devDependencies、peerDependencies 和 optionalDependencies 类别中：

```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

升级依赖包

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

移除依赖包

```
yarn remove [package]
```

安装项目的全部依赖

```
yarn
```

或者

```
yarn install
```
