"use client";
import React, { useState } from "react";

const UpdateProductForm = ({ product }) => {
  const [title, setTitle] = useState(product.title || "");
  const [description, setDescription] = useState(product.description || "");
  const [price, setPrice] = useState(product.price || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // To track successful submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors
    setSuccess(false); // Reset success state before submitting

    try {
      const response = await fetch("/product-db/api", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: product.id, title, description, price }),
      });

      if (response.ok) {
        const updatedProduct = await response.json();
        console.log(updatedProduct);
        setTitle(updatedProduct.title);
        setDescription(updatedProduct.description);
        setPrice(updatedProduct.price);
        setSuccess(true); // Set success on successful response
      } else {
        const errorResponse = await response.json();
        setError(errorResponse?.message || "Unable to update product");
      }
    } catch (err) {
      setError("Network error: Unable to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        Update Product
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Product title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
            placeholder="Enter product title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
            rows="4"
            placeholder="Enter product description"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Price ($)
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
            placeholder="Enter product price"
            required
            step="0.01"
          />
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        {success && (
          <div className="text-green-500 text-sm text-center mb-4">
            Product updated successfully!
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={loading} // Disable button when loading
            className={`px-6 py-3 ${
              loading
                ? "bg-gray-400"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
            } text-white font-medium rounded-md`}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm text-white animate-spin"></span>
            ) : (
              "Update Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
