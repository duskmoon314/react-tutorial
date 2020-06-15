# 实现游戏功能

接下来添加随机数生成功能，使用`Math.random()`可以生成一个 0 到 1 之间的数，再结合乘法和`Math.floor()`向下取整便可以得到一个随机数生成器。但是如果简单的放在组件内部，React 每次渲染的时候都会重新生成，游戏便无法正常工作。因此也采用`state`来保存这个目标数字——使用 React 的`state Hook`，用 1 到 100 的随机数进行初始化。

```javascript
const [secret, setSecret] = useState(Math.floor(Math.random() * 100 + 1));
```

下面再添加一个按钮，用于点击的时候输出一个信息表示现在猜的数字是偏大、偏小还是“完全一致”。为方便，输出信息还是使用 antd 提供的`message`。

```javascript
import { Button, InputNumber, message } from "antd";
...
const App: React.FC = () => {
  const handleSubmit = () => {
    if (guess < secret) message.info("Too small");
    else if (guess > secret) message.info("Too big");
    else message.success("You win");
  };

  return (
    <div>
      ...
      <Button onClick={handleSubmit} type="primary">
        Submit
      </Button>
    </div>
  );
}
```

这段代码加入了一个简单的函数进行判断，用于在点击按钮时使用此时的状态`guess`和`secret`进行大小比较。

我们会注意到，前面定义的`setSecret`并未使用，运行检查会提示这里有个`warning`。为了解决这个`warning`，我们考虑再加入一个按钮，当游戏结束的时候可以点击按钮重置随机数，开始下一轮游戏。

```javascript
const handleRandom = () => {
  setSecret(Math.floor(Math.random() * 100 + 1));
};
...
<Button onClick="{handleRandom}">
  Another Guess
</Button>;
```

加入一个`handleRandom`函数，调用`setSecret`对随机生成的数进行重制，再添加一个按钮用于点击时触发该函数。不过这样游戏还未结束便可以进行重制，感觉不太好，再加入对按钮的限制好了。

```javascript
const [randomAble, setRandomAble] = useState(false);

const handleSubmit = () => {
  ...
  else {
    message.success("You win");
    setRandomAble(true);
  }
};

const handleRandom = () => {
  setSecret(Math.floor(Math.random() * 100 + 1));
  setRandomAble(false);
};

<Button onClick={handleRandom} disabled={!randomAble}>
  Another Guess
</Button>
```

这样便加入了对重制游戏按钮可用性的限制，通过整个`App`的状态`randomAble`进行控制。当游戏结束时，将限制解除，点击重制后再进行限制。

---

最终代码如下。

```javascript
import React, { useState } from "react";
import { Button, InputNumber, message } from "antd";
import "./App.css";

const App: React.FC = () => {
  const [secret, setSecret] = useState(Math.floor(Math.random() * 100 + 1));
  const [guess, setGuess] = useState < number > 0;
  const [randomAble, setRandomAble] = useState(false);

  const onInputChange = (value: number | string | undefined) => {
    if (value) setGuess(parseInt(value.toString()));
  };

  const handleSubmit = () => {
    if (guess < secret) message.info("Too small");
    else if (guess > secret) message.info("Too big");
    else {
      message.success("You win");
      setRandomAble(true);
    }
  };

  const handleRandom = () => {
    setSecret(Math.floor(Math.random() * 100 + 1));
    setRandomAble(false);
  };

  return (
    <div>
      <h1>Guessing Game</h1>
      <p>Please Input Your Number:</p>
      <InputNumber
        defaultValue={3}
        onChange={onInputChange}
        onPressEnter={handleSubmit}
      />
      <Button onClick={handleSubmit} type="primary">
        Submit
      </Button>
      <Button onClick={handleRandom} disabled={!randomAble}>
        Another Guess
      </Button>
      <p>
        You guess {guess}
        {/*secret {secret}*/}
      </p>
    </div>
  );
};

export default App;
```
