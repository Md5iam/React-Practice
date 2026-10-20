import { useEffect, useState } from 'react'
import './App.css'

// useEffect synchronizes React with external systems after rendering to keep rendering pure

function App() {
  const [second , setSecond] = useState(0);

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setSecond((prev) => prev+1);
    } , 1000)

    return ()=> clearInterval(timerId);
  },[]);

  return (
    <>
    <p>The second is : {second}</p>
    </>
  )
}

export default App
