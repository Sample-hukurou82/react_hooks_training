import React, { useState } from "react";

const App = () => {
  const initialStates = {
    name: "",
    praice: 1000,
  };

  const [name, setName] = useState(initialStates.name);
  const [praice, setPraice] = useState(initialStates.praice);

  const reset = () => {
    setPraice(initialStates.praice);
    setName(initialStates.name);
  };

  return (
    <>
      <p>
        現在の{name}は、{praice}円です。
        <button onClick={() => setPraice(praice + 1)}>+1</button>
        <button onClick={() => setPraice(praice - 1)}>-1</button>
        <button onClick={reset}>リセット</button>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </p>
    </>
  );
};

export default App;
