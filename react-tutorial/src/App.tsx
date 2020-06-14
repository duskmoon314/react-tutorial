import React, { useState } from "react";
import { Button, InputNumber, message } from "antd";
import "./App.css";

const App: React.FC = () => {
  const [secret, setSecret] = useState(Math.floor(Math.random() * 100 + 1));
  const [guess, setGuess] = useState<number>(0);
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
