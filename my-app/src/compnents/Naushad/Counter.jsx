import { useState } from 'react';

function Counter() {
  let [counter, setCounter] = useState(0);

  const addNumber = () => {
    setCounter(counter + 1); // Increment correctly
  };

  const removeNumber = () => {
    if (counter > 0) {
      setCounter(counter - 1); // Decrement correctly
    }
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addNumber}>Add Number</button>
      <button onClick={removeNumber}>Remove Number</button>
    </>
  );
}

export default Counter;
