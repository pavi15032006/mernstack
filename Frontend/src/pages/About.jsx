import React from 'react'

export const About = ({dept,name,age}) => {
  return (
    <div>
    <p>Name:{name}</p>
    <p>Age:{age}</p>
    <p>Department:{dept}</p>
    </div>
  )
}
export default About