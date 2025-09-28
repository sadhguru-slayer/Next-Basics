import React from 'react'
import Navbar from '@/components/Navbar'
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <Navbar />
      <main className="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-700">Welcome!</h1>
        <p className="text-lg text-gray-700">This is main content</p>
      </main>
    </div>
  )
}

export default LandingPage