import { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);

  const increaseby5 = () =>{
    setCount(count+5);
  }

  return(
    <div>
      <button onClick={()=> setCount(count + 1)} >IncrementBy1</button> <br /> <br />
      <button onClick={()=> increaseby5()}>IncrementBy5</button> <br /> <br />
      <button onClick={()=> setCount(count - 1)}>Deccrement</button> <br />
      <p>{count}</p>
    </div>
  );
}


