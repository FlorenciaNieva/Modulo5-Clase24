import { createContext, useState } from "react";

export const CountContext = createContext() //creamos el contexto y lo guardamos en la variable

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  }

  const restar = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  const data = {
    count,
    sumar,
    restar,
    reset,
  }

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>
}

export default CountContextProvider;