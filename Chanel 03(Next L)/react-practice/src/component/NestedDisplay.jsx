import "./Card.css"

export default function NestedDisplay({ count }){
  return(
    <div className="card-blue">
      <p>Grand child</p>
      <p> Count is {count} </p>
    </div>
  );
}


