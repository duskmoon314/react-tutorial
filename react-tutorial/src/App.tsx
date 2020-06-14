import React, { useState } from "react";
import { InputNumber, message } from "antd";
import "./App.css";

const App: React.FC = () => {
  const [guess, setGuess] = useState<number>(0);

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
