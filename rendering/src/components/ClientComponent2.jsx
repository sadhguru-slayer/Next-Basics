"use client"

import React, {useState} from 'react'
const ClientComponent2 = () => {
   const [count, setCount] = useState(0);
   console.log('ClientComponent2 rendered');
  return (
    <div>ClientComponents1</div>
  )
}

export default ClientComponent2