import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  
  const addButton = () => {
    setCount(count+1);
  };

  const minusButton = () => {
    setCount(count-1);
  };

  const resetButton = () => {
    setCount(0);
  };
 
  return (
    <>
      <h1>Counter App</h1>
      <h2>Made using React</h2>
      <h2>{count}</h2>
      <button onClick={addButton}>+1</button>
      <button onClick={minusButton}>-1</button>
      <button onClick={resetButton}>reset</button>
    </>
  )
}

export default App
