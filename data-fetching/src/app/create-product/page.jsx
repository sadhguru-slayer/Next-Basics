"use client"

import React,{useState} from "react";

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const [success,setSuccess] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('create-product/api',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({title,description,price})
            })
            if(!response.ok){
                console.log(response)
            setError("Failed to load things");
            setTitle("");
            setDescription("");
            setPrice("");
            }
            setSuccess(true);
            
        } catch (error) {
            console.log(error)
            setError("Failed to create product");
            setSuccess(false);
        }finally{
            setLoading(false);
        }

    }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Create New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="title">
              Product Title
            </label>
            <input
            value={title}
              id="title"
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter product title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
            value={description}
              id="description"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Enter product description"
              onChange={(e)=> setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2" htmlFor="price">
              Price
            </label>
            <input
            value={price}
              id="price"
              type="number"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter price"
              onChange = {(e)=> setPrice(e.target.value)}
              step="0.01"
            />
          </div>
          <button
            type="submit"
            disabled={success}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition"
          >
           {
            loading ? "Creating..." : success ? "Created!" : error ? "Error" : "Submit"
           }
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;