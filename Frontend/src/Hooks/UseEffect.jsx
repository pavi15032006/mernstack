{/*useEffect(()=>{
    //side effect code
},[dependence])*/}

import React,{useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const [value,setValue]=useState(0);
    useEffect(()=>{
        console.log("useEffect Mounted");

    },[])//with dependency array
    

    {/*
    useEffect(()=>{
        console.log("useEffect Mounted");

    },[count])
    */}

    {/*useEffect(()=>{
        console.log("useEffect Mounted");

    })
    */}// without dependency
    useEffect(()=>{
        console.log("useEffect Mounted");

    },[count,value])
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>inc</button>
    </div>
  )
}
export default UseEffect 
