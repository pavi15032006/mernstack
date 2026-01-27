import React, {useState} from 'react'

 const Counter = () => {
    //const count1=0;
    const [count, setCount]=useState(0);
    const handledecrement=()=>{
        setCount(count-1)
    }
    const handleIncrement=()=>{
        setCount(count-1)
    }
    //const [count, setCount]=useState(0);

    //}
    //useState();
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>{setCount(count-1)}}>Decrement</button>
       <button onClick={()=>{setCount(count+1)}}>Reset</button>
       <button onClick={()=>{setCount(count+1)}}>Increment</button>
       <button onclick={handledecrement}>Decrement</button>
       <button onclick={handleIncrement}>Increment</button>
       
    </div>
  )
}
export default Counter