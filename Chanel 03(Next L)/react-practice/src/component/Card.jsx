import { useState } from "react";
import "./Card.css"

export default function Card({ name , age}){
  const [member, setMember] = useState("");

  const clickHandler = (name) =>{
    setMember(name);
  }
  console.log(member);

  return(
      <div   onClick={() => clickHandler(name)} className="box">
        <p className="one">{name} is {age} years old</p>
        <p className="one">He is a big boy</p>
        {member &&  <p>Greeting {member}</p> }
    </div>
  );
}


