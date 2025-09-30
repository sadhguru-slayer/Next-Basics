"use client"

import { createProduct } from '@/action/products';
import SubmitButton from '@/components/SubmitButton';

import { useActionState } from 'react';



const AddProductPage = () => {
    const initialState = {
        errors: {}
    }

    const [state,formAction] = useActionState(createProduct,initialState);


    return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Create New Product</h1>
        <form action={formAction}  className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="title">
              Product Title
            </label>
            <input

              id="title"
              name="title"
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter product title"
            />
             {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Enter product description"
            />
             {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter price"
              step="0.01"
            />
             {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
          </div>
          <SubmitButton/>
        </form>
      </div>
    </div>
  );
}

export default AddProductPage