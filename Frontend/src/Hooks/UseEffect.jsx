import React, { useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setcount]=useState(0);
    const [value,setValue]=useState(0);
    const handleIncrement=()=>{
        setcount((count)=>count+1)
        setcount((count)=>count+1)
       setcount((count)=>count+1);
    }
    useEffect(() => {
    console.log("useEffect Mounted");
  })

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* uses handleIncrement */}
      <button onClick={handleIncrement}>Increment Count</button>

      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)}>
        Increment Value
      </button>
    </div>
  );
};

export default UseEffect;


{/*useEffect(()=>{
    //side effect code
},[dependence])*/}

{/*import React,{useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState(0);
    const handleIncrement=()=>{
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        {/*setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)*/}
        //setCount(count+1)
        //setCount(count+1)
        

    
   {/*} useEffect(()=>{
        console.log("useEffect Mounted");

    },[])//with dependency array*/}
    

    {/*
    useEffect(()=>{
        console.log("useEffect Mounted");

    },[count])
    */}

    {/*useEffect(()=>{
        console.log("useEffect Mounted");

    })
    */// without dependency
    {/*useEffect(()=>{
        console.log("useEffect Mounted");

    },[count,value])*/}
    {/*return (
    <div>
        <h1>{count}</h1>
        {/*<button onClick={()=>setCount(count+1)}>inc</button>*/}
        /*<button onClick={(handleIncrement)}>inc</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>inc</button>
    </div>
  )
}
export default UseEffect */}
