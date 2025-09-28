import Link from 'next/link';

import React from 'react';
import data from './data';

const PhotoFeed = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Photo Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link key={item.id} href={`/photo-feed/${item.id}`}>
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <img src={item.url} alt={item.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
    </div>
  </div>
</Link>

        ))}
      </div>
    </div>
  );
};

export default PhotoFeed;
