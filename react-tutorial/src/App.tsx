import React, { useState, useEffect } from "react";
import { Button, InputNumber, message } from "antd";
import History from "./history";
import "./App.css";

const App: React.FC = () => {
  const [secret, setSecret] = useState(Math.floor(Math.random() * 100 + 1));
  const [guess, setGuess] = useState<number>(0);
  const [randomAble, setRandomAble] = useState(false);
  const [history, setHistory] = useState<{ value: number; status: string }[]>(
    []
  );

  const onInputChange = (value: number | string | undefined) => {
    if (value) setGuess(parseInt(value.toString()));
  };

  const handleSubmit = () => {
    if (guess < secret) {
      message.info("Too small");
      setHistory([...history, { value: guess, status: "Too small" }]);
    } else if (guess > secret) {
      message.info("Too big");
      setHistory([...history, { value: guess, status: "Too big" }]);
    } else {
      message.success("You win");
      setHistory([...history, { value: guess, status: "You Win" }]);
      setRandomAble(true);
    }
  };

  const handleRandom = () => {
    setSecret(Math.floor(Math.random() * 100 + 1));
    setHistory([]);
    setRandomAble(false);
  };

  useEffect(() => {
    document.title = `You guess ${guess}`;
  }, [guess]);

  return (
    <div>
      <h1>Guessing Game</h1>
      <p>Please Input Your Number:</p>
      <InputNumber
        defaultValue={guess}
        onChange={onInputChange}
        onPressEnter={handleSubmit}
      />
      <Button onClick={handleSubmit} type="primary">
        Submit
      </Button>
      <Button onClick={handleRandom} disabled={!randomAble}>
        Another Guess
      </Button>
      <History history={history} />
    </div>
  );
};

export default App;
