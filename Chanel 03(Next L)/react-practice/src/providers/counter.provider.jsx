import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext();

export default function CounterProvider({children}){
  const [count , setCount] = useState(0);

  return(
    <CounterContext.Provider value = {{count , setCount}}>
      {children}
    </CounterContext.Provider>
  );
}