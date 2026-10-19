import { useState } from 'react';
import './App.css'
import Card from './component/Card'
import Counter from './component/Counter';

function App() {
  const[txt , setTxt] = useState("");
  const[output , setOutput] = useState("");

  const users = [
    {name : "Siam" , age : 20},
    {name : "Fahim" , age : 10},
    {name : "Rahim" , age : 50},
    {name : "Sakib" , age : 45},
  ];

  const handleSubmit = (e)=>{
    e.preventDefault();
    setOutput(txt);
  }

  return (
    <>

    <form onSubmit={handleSubmit}>
      <input onChange={(e)=> setTxt(e.target.value)} type="text" /> <br />
      <button type="text">Submit</button>
      {output && <p>The input value is {output}</p>}
    </form> 

    {
      users.sort((a, b) => (b.age - a.age))
      .map((member) => (<Card name = {member.name}  age = {member.age}/>))
    }

    {/* <Counter /> */}
    </>
  )
}

export default App
