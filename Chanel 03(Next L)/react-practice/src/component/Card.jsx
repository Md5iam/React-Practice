import "./Card.css"


// onClick={}
// onMouseDown={}
// onMouseEnter={}
// onMouseLeave={}
// onScroll={}
// onSubmit={}
// onBlur={}


export default function Card({ name , age}){
  const clickHandler = (name) =>{
    console.log("Click by " + name);
  }

  const gretting = () =>{
    console.log("How are u!");
  }

  const combine = (name) =>{
    clickHandler(name);
    gretting();
  }


  return(
      <div   onClick={() => combine(name)} className="box">
        <p className="one">{name} is {age} years old</p>
        <p className="one">He is a big boy</p>
    </div>
  );
}


