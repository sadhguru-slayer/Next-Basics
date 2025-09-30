"use client"

import React from 'react'
import { FaSeedling } from 'react-icons/fa'; // ✅ Icon package (install if needed)

const seedIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
          <FaSeedling className="text-green-500 text-6xl mb-4" />
          <p className="text-lg text-gray-300">No products found. Add seed products to get started!</p>
        </div>
  )
}

export default seedIcon