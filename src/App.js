import React, { useState, useEffect } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  //レンダーが行われるたび毎回実行される
  useEffect(() => {
    console.log("DidMount、DidUpdate");
  });

  //[]を付けると最初だけ呼ばれるだけで実行されない
  useEffect(() => {
    console.log("DidMount");
  }, []);

  //[name]と書くとinputの中でnameを弄った時だけ実行される
  useEffect(() => {
    console.log("callback name only");
  }, [name]);

  return (
    <>
      <p>
        現在の{state.name}は、{state.price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>リセット</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
