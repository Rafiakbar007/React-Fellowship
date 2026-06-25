import { useState } from 'react'
import Chaiapp from './Chaiapp.jsx'


function App() {

const [count, setCount] = useState(0);

    return (

  <div className="bg-amber-200 flex justify-center items-center h-dvh">

    <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-80 ">

      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Count: {count}
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Increase
      </button>

      <br />
      <br />

      <button
        onClick={() => setCount(count - 1)}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Decrease
      </button>

      <br />
      <br />

      <button
        onClick={() => setCount(0)}
        className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Reset
      </button>

      <p
        className={`mt-6 text-xl font-bold ${
          count % 2 === 0 ? "text-blue-600" : "text-purple-600"
        }`}
      >
        {count % 2 === 0 ? "Even" : "Odd"}
      </p>

      <div className="mt-6">
        <Chaiapp />
      </div>

    </div>


  </div> 

  )
}

export default App
