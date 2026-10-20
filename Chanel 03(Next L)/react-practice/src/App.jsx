import { useEffect, useState } from 'react'
import './App.css'

// useEffect synchronizes React with external systems after rendering to keep rendering pure

function App() {
  const [count , setCount] = useState(0);
  const [countSecond , setCountSecond] = useState(0);

  useEffect(()=>{
    console.log("Siam Ahmed");
  },[count]);

  return (
    <>
      <button onClick={()=> setCount(count+1)}> Incremement({count})</button>
      <button onClick={()=> setCountSecond(count+1)}> IncremementSecond({countSecond})</button>
    </>
  )
}

export default App
