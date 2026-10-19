import { useState } from "react";
import "./Card.css"

// Must use hooks(state) code in top level in component
// Must use inside react component

export default function Card({ name , age}){
  const [member, setMember] = useState("Hooks");

  const clickHandler = (name) =>{
    setMember(name);
  }
  console.log(member);

  return(
      <div   onClick={() => clickHandler(name)} className="box">
        <p className="one">{name} is {age} years old</p>
        <p className="one">He is a big boy</p>
    </div>
  );
}


