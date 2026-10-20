import { use } from "react";
import "./Card.css"
import {CounterContext} from '../providers/counter.provider.jsx'

export default function Counter(){
  const {count , setCount} = use(CounterContext)

  const increaseby5 = () =>{
    setCount(count+5);
  }

  return(
    <div className="box">
      <button onClick={()=> setCount(count + 1)} >IncrementBy1</button> <br /> <br />
      <button onClick={()=> increaseby5()}>IncrementBy5</button> <br /> <br />
      <button onClick={()=> setCount(count - 1)}>Deccrement</button> <br />
    </div>
  );
}


