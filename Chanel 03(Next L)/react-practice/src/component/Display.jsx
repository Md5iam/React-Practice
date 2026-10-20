import "./Card.css"
import NestedDisplay from "./NestedDisplay";

export default function Display({ count }){
  return(
    <div className="box1">
      <p>Child</p>
      <NestedDisplay count={count} />
    </div>
  );
}


