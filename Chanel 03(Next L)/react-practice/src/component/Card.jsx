// props = its like a parameter ... get element from conponent, and receive it like destructuring
// children = Content that writtrn inside an existing component

// export default function Card(props){
//   return(
//     <div>
//       {props.children}
//       <p> First Name : {props.firstName}  </p>
//       <p> Last Name : {props.lastName}  </p>
//       <p> Age : {props.age}  </p>
//     </div>
//   );
// }

export default function Card({ children,  firstName, lastName, age}){
  return(
    <div>
      {children}
      <p> First Name : {firstName}  </p>
      <p> Last Name : {lastName}  </p>
      <p> Age : {age}  </p>
    </div>
  );
}