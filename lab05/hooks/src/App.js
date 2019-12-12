import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log('MOUNT');
    return () => (window.document.title = '');
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} disabled={count >= 20}>
        Click
      </button>
    </div>
  );
}

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div>
      <button onClick={() => setShowCounter(true)}>Pokaz</button>
      <button onClick={() => setShowCounter(false)}>Ukryj</button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
