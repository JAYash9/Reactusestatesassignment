import { useState } from "react"

export default function Counter(){
    const[count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count+1);
    }
    function reset(){
        setCount(0);
    }
    return(

    <div>
            <h1 className="bg-pink-600 text-3xl font-bold p-4 rounded">
        Counter: {count}
      </h1>
      <div className="mt-4 space-x-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Reset
        </button>
      </div> 
      </div>
    )
}