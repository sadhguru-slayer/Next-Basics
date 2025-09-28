import React from 'react'


const layout = ({children}) => {
  return (
    <div className='bg-black text-white min-h-screen p-4'>
    {children}
    </div>
  )
}

export default layout