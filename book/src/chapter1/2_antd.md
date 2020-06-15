# 添加 ant.design 并实现基本框架

我们使用蚂蚁金服开源的 Ant Design of React 组件库，在终端中键入

```bash
yarn add antd
```

这条命令将 antd 添加到了项目的`node_modules`，打开`package.json`便可以找到形式这样的一段：

```json
"dependencies": {
    ...
    "antd": "^4.3.3",
    ...
  },
```

这表示，本项目依赖 4.3.3 版本的 antd，在任何一个具有此`package.json`的文件夹中都可以根据它使用 npm 或 yarn 设置好环境。

然后我们修改`src/App.css`，在最前面添加一行`@import "~antd/dist/antd.css";`用于启用 antd 提供的样式。

```javascript
import React, { useState } from "react";
import { InputNumber, message } from "antd";
import "./App.css";

const App: React.FC = () => {
  const [guess, setGuess] = useState < number > 0;

  const onInputChange = (value: number | string | undefined) => {
    message.info(`You guess ${value}`);
    if (value) setGuess(parseInt(value.toString()));
  };

  return (
    <div>
      <h1>Guessing Game</h1>
      <p>Please Input Your Number:</p>
      <InputNumber defaultValue={3} onChange={onInputChange} />
      <p>You guess {guess}</p>
    </div>
  );
};

export default App;
```

这段代码添加了一个输入框，并在输入框中数字改变时弹出一个提示信息。

`React.FC`是“函数式组件”的缩写，使用它来告诉编译器`App`是一个函数组件。

`const [guess, setGuess] = useState<number>(0);`使用 React 的`state Hook`，表示`App`中有个状态叫做`guess`，初始化为 0。

```html
<div>
  <h1>Guessing Game</h1>
  <p>Please Input Your Number:</p>
  <InputNumber defaultValue="{3}" onChange="{onInputChange}" />
  <p>You guess {guess}</p>
</div>
```

return 返回的是**TSX**，简单来说类似 HTML，可以用`<Component />`的形式添加 React 的组件，也可以用`{var}`的形式调用前面定义的变量。

```javascript
const onInputChange = (value: number | string | undefined) => {
  message.info(`You guess ${value}`);
  if (value) setGuess(parseInt(value.toString()));
};
```

声明函数`onInputChange`，参数类型为 number _或_ string _或_ undefined，为了与 antd 提供的组件`<InputNumber />`的`onChange`一致。其功能为弹出一个信息，显示当前输入的数，并在非空时将数存入状态`guess`中。
