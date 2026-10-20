import { useState } from 'react';
import './App.css'
import Card from './component/Card'
import Counter from './component/Counter';

function App() {
  const[name , setName] = useState("");
  const[age , setAge] = useState("");
  const[members , setMembers] = useState([
    {name : "Siam" , age : 20},
    {name : "Fahim" , age : 10},
    {name : "Rahim" , age : 50},
    {name : "Sakib" , age : 45},
  ]);


  const handleSubmit = (e)=>{
    e.preventDefault();
    setMembers({name , age})
  }

  return (
    <>

    <form onSubmit={handleSubmit}>
      <input onChange={(e)=> setName(e.target.value)} type="text" /> <br />
      <button type="text">Submit</button>
    </form> 

    {
      members.sort((a, b) => (b.age - a.age))
      .map((member) => (<Card name = {member.name}  age = {member.age}/>))
    }

    {/* <Counter /> */}
    </>
  )
}

export default App
