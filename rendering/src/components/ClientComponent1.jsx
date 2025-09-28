"use client"

import React, {useState} from 'react'
const ClientComponent1 = ({children}) => {
   const [count, setCount] = useState(0);
   console.log('ClientComponent1 rendered');
  return (
    <div>ClientComponents1
    {children}
    </div>
  )
}

export default ClientComponent1