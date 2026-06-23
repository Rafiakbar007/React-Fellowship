import { useState } from 'react'
import Chai from './chai.jsx'


function App() {

const [count, setCount] = useState(0);

  return (
    <div>
       <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      
  <br />
  <br />

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

 <br />
 <br />

      <button onClick={() => setCount(0)}>
        Reset
      </button>

<br />

<p>{
  
    count % 2 === 0 ? "Even" : "Odd"
  
  }</p>


<Chai />
    </div>

  )
}

export default App
