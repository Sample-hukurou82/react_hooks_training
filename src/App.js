import React, { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    <>
      <p>
        現在の{state.name}は、{state.price}円です。
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
      </p>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
