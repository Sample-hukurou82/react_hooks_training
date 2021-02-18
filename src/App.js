import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increment2 = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement2 = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const double = () => {
    setCount(count * 2);
  };

  const triple = () => {
    setCount((previousCount) =>
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    );
  };

  return (
    <>
      <div>カウント: {count}</div>
      <div>
        <button onClick={increment}>カウントアップ</button>
        <button onClick={decrement}>カウントダウン</button>
      </div>
      <div>
        <button onClick={increment2}>カウントアップ2</button>
        <button onClick={decrement2}>カウントダウン2</button>
      </div>
      <div>
        <button onClick={reset}>リセット</button>
      </div>
      <div>
        <button onClick={double}>倍</button>
      </div>
      <div>
        <button onClick={triple}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
