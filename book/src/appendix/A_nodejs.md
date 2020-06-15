# Node.js & Yarn

本节简单介绍一下 Node.js 和 Yarn 的安装与使用

## Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，我们写好的 JavaScript 代码将使用 Node.js 执行。

可以从以下链接获取安装包：

- [官方网站](https://nodejs.org/en/download/)
- [清华 tuna 镜像](https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/)
  - [tuna 镜像帮助页面](https://mirrors.tuna.tsinghua.edu.cn/help/nodejs-release/)
- [北京外国语大学镜像](https://mirrors.bfsu.edu.cn/nodejs-release/)
  - [北外镜像帮助页面](https://mirrors.bfsu.edu.cn/help/nodejs-release/)

推荐使用尽可能新的长期支持版本，具体安装步骤可以参考[（略过时的）菜鸟教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)。

由于我们目前尚不需要使用 nvm（Node Version Manager）对 Node.js 进行版本管理，有需要的可以自行搜索学习。

安装完 Node.js 后，也一并安装完了 npm（Node Package Manager），可以使用`npm install`安装需要的 JavaScript 包。

## Yarn

Yarn 是比 npm（相对）更好的依赖管理工具，[官网](https://yarn.bootcss.com/docs/getting-started/)。可以使用 npm 进行安装

```bash
npm install -g yarn
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
