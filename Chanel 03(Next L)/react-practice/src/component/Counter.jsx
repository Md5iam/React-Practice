export default function Counter({count , setCount}){

  const increaseby5 = () =>{
    setCount(count+5);
  }

  return(
    <div>
      <button onClick={()=> setCount(count + 1)} >IncrementBy1</button> <br /> <br />
      <button onClick={()=> increaseby5()}>IncrementBy5</button> <br /> <br />
      <button onClick={()=> setCount(count - 1)}>Deccrement</button> <br />
    </div>
  );
}


