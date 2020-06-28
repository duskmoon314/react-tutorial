# Init with create-react-app

## 摘要

- 项目初始化
- React 项目的结构
- `package.json`的内容

---

我们使用 create-react-app 来创建一个简单的“单页应用”，用于学习。

习惯于 npm 和 npx，在终端中键入

```bash
npx create-react-app react-tutorial --typescript
```

习惯 yarn，在终端中键入

```bash
yarn create react-app react-tutorial --template typescript
```

接着进入 create-react-app 创建的文件夹

```bash
cd react-tutorial
yarn add typescript @types/node @types/react @types/react-dom @types/jest --dev
```

创建的文件夹中有如下内容：

```
node_modules/
    ...
public/
    ...
src/
    App.tsx
    index.tsx
    ...
.gitignore
package.json
README.md
tsconfig.json
yarn.lock
```

我们接下来需要做的是修改 App.tsx，在其中实现一个猜数字的小游戏。

```bash
yarn start
```

启动 React 应用，在浏览器中打开`localhost:3000`查看应用
