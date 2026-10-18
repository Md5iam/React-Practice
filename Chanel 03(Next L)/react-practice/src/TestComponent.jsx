// file extension must me .jsx 
// Component name must start with capital letter 
// There must be a default export / export 
// A component must return a single root

const name = "Siam";

const TestComponent = () => {
  return (
    <>
      <div>
        <h1>This is from test component</h1>
        <p>My name is {name}</p>
      </div>

      <div>
        <h1>Bd means Bangladesh</h1>
        <span>Bangladesh in a beautiful country</span>
      </div>
    </>
  )
};

export default TestComponent;

// export default function TestComponent (){
//   return <h1>This is from test component</h1>
// }