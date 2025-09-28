"use client"

import React,{useEffect} from 'react'

const Error = ({error}) => {
    useEffect(()=>{
        console.error(error)
    },[error])
  return (
    <div className='text-center text-red-500 dark:text-red-400 font-semibold'>
      <p>Error Fetching Data 🥲</p>
    </div>
  )
}

export default Error