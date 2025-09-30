import React from 'react'
import Form from 'next/form';
const SearchComponent = () => {
  return (
        <Form action='/product-db' className="space-y-5">
            <input
              type="text"
              name='query'
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search something..."
            />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition"
          >
         Search
          </button>
        </Form>
  )
}

export default SearchComponent;
