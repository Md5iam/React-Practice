import { useState } from "react";
import "./Card.css"

export default function Card({ name , email}){
  const [member, setMember] = useState("");

  const clickHandler = (name) =>{
    setMember(name);
  }
  console.log(member);

  return(
      <div   onClick={() => clickHandler(name)} className="box">
        <p className="one">The name is {name}</p>
        <p className="one">The mail is {email}</p>
        {member &&  <p>Greeting {member}</p> }
    </div>
  );
}


