// props = its like a parameter ... get element from conponent, and receive it like destructuring

// export default function Card(props){
//   return(
//     <div>
//       <p> First Name : {props.firstName}  </p>
//       <p> Last Name : {props.lastName}  </p>
//       <p> Age : {props.age}  </p>
//     </div>
//   );
// }

export default function Card({firstName, lastName, age}){
  return(
    <div>
      <p> First Name : {firstName}  </p>
      <p> Last Name : {lastName}  </p>
      <p> Age : {age}  </p>
    </div>
  );
}