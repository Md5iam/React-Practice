import { useState } from 'react';
import './App.css'
import Card from './component/Card'
import Counter from './component/Counter';

function App() {
  const[name , setName] = useState("");
  const[age , setAge] = useState("");
  const[members , setMembers] = useState([]);


  const handleSubmit = (e)=>{
    e.preventDefault();
    // setMembers([ ...members, {name , age}])
    setMembers((prev)=> [...prev , {name , age}] )
  }

  return (
    <>

    <form onSubmit={handleSubmit}>
      <input onChange={(e)=> setName(e.target.value)} type="text" /> <br />
      <input onChange={(e)=> setAge(e.target.value)} type="number" /> <br />
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
