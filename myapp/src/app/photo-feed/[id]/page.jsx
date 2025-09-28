import React from 'react'
import data from '../data';
const page = async ({params}) => {
    const urlparams = await params;
    const photo = data.find((item)=> item.id === parseInt(urlparams.id));
    
  return (
   <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      {/* Image Hero */}
      <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Photo Info */}
      <div className="max-w-4xl mx-auto mt-6 bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">{photo.title}</h1>
        <p className="text-gray-600 mb-4">{photo.description}</p>

        <div className="text-sm text-gray-500 flex justify-between items-center border-t pt-4">
          <span>📸 Photo ID: <span className="font-medium">{photo.id}</span></span>
          <span>🗓️ Uploaded on: Today</span>
        </div>
      </div>
    </div>
  )
}

export default page