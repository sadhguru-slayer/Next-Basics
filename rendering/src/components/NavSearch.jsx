"use client"
// We make the search component as client side because if we make a parent component as client component then all the chooldren relateed to it will become a client component
// And that's a major problems for us aswell, so we have to try to make the leaf or children-most components as client components
import React, {useState} from 'react'

const NavSearch = () => {
    console.log('NavSearch rendered');
    const [search, setSearch] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        className="px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  )
}

export default NavSearch