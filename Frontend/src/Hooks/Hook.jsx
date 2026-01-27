import React from 'react'
import { Link } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to='/useState'>UseState</Link></li>
            <li><Link to='/useEffect'>UseEffect</Link></li>
            <li><Link to='/useEffectApi'>UseEffectWithApi</Link></li>
            
        </ol>
    </div>
  )
}

export default Hook