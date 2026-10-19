import './App.css'
import Card from './component/Card'
import Counter from './component/Counter';

function App() {

  const users = [
    {name : "Siam" , age : 20},
    {name : "Fahim" , age : 10},
    {name : "Siam" , age : 50},
    {name : "Sakib" , age : 45},
  ];

  return (
    <>
        {/* <Card name = {users[0].name} age = {users[0].age} />
        <Card name = {users[1].name} age = {users[1].age} />
        <Card name = {users[2].name} age = {users[2].age} />
        <Card name = {users[3].name} age = {users[3].age} /> */}

    {/* {
      users.filter(member => member.age >= 18 )
      .sort((a, b) => (b.age - a.age))
      .map((member) => (<Card name = {member.name}  age = {member.age}/>))
    } */}

    <Counter />


    </>
  )
}

export default App
