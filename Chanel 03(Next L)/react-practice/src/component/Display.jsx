import "./Card.css"
import NestedDisplay from "./NestedDisplay";

export default function Display(){
  return(
    <div className="box1">
      <p>Child Component</p>
      <NestedDisplay />
    </div>
  );
}


