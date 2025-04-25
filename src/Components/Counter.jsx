import React, {useState} from 'react'

const Counter = () => {

const [count, setCount] = useState(4)    

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={(e)=> setCount(count + 1)}>Increment</button>
        <button onClick={(e)=> setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter