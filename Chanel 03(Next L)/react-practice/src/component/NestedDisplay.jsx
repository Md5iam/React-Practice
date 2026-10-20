import "./Card.css"
import {CounterContext} from '../providers/counter.provider.jsx'
import { use } from "react";

export default function NestedDisplay(){
  const {count} = use(CounterContext)
  return(
    <div className="card-blue">
      <p>Grand child Component</p>
      <p> Count is {count} </p>
    </div>
  );
}


