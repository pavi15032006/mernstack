import React,{useEffect,useState} from 'react'

const UseEffectApi = () => {
  const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")//instead of users there is 'post'
        .then((res)=>res.json())
        .then((data)=>setUsers(data));
    },[])//empty dependency array
  return (
    <div>
      <ul>
        {users.map((user,index)=>(
          <li key={index}>
          <p>Name :{user.name}</p>
          <p>Email :{user.email}</p>
          <p>latitude : {user.address.geo.lat}</p>
          </li>
        ))}
      </ul>
    </div>
 )
}
export default UseEffectApi
