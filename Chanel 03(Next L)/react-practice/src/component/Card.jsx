import "./Card.css"


// way 01 ( if-else)
export default function Card({ name , age}){
    if (age >= 18 ){
      return(
        <div className="box">
          <p className="one">{name} is {age} years old</p>
          <p className="one">He is a big boy</p>
        </div>
      );
    }
    else{
      return(
        <div className="box">
          <p className="two">{name} is {age} years old</p>
          <p className="two">He is a small boy</p>
        </div>
      );
    }
}


// way 02 ( )
// export default function Card({ name , age}){
//   return(

//     <>
//       {age >= 18 && (
//         <div className="box">
//           <p className="one">{name} is {age} years old</p>
//           <p className="one">He is a big boy</p>
//         </div>
//       )}

//       {age < 18 && (
//         <div className="box">
//           <p className="two">{name} is {age} years old</p>
//           <p className="two">He is a small boy</p>
//         </div>
//       )}
//     </>
//   );
// }


// way 03 ( ternary operator)
// export default function Card({ name , age}){
//   return(

//     <>
//       {age >= 18 ? (
//         <div className="box">
//           <p className="one">{name} is {age} years old</p>
//           <p className="one">He is a big boy</p>
//         </div>
//       ) : (
//         <div className="box">
//           <p className="two">{name} is {age} years old</p>
//           <p className="two">He is a small boy</p>
//         </div>
//       )}
//     </>
//   );
// }

