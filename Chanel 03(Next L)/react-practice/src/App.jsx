import { useState } from 'react';
import './App.css'
import Counter from './component/Counter';
import Display from './component/Display';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} setCount={setCount} />
      <Display count={count} />
    </>
  )
}

export default App
