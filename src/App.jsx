import React, { useState , useMemo} from 'react'

function App() {
  
  const [count,setCount] = useState(0);
  
  const double = (double) => {
      console.log("function called");
      for(let i=0;i<=1000000000; i++) {}; 
      return double*2;
  }


  const funcitonvalue = useMemo(() => double(5), []); // we are passing [] to useMemo because we dont want to run this after each increment

  // const funcitonvalue = useMemo(() => double(5), [count]); // we are passing [count] to useMemo because we  want to run this after each increment


  return (
      <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>count = {count}</h2>
        <h2>double value = {funcitonvalue}</h2>
      </>
  )
}

export default App