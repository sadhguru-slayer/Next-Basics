"use client";
import Link from "next/link";
import React, {  useState } from "react";


const ProductTable = ({ products: initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [isDeleting, setIsDeleting] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);



  const handleConfirmDelete = (id) => {
    setSelectedProductId(id);
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    setSelectedProductId(null);
    setShowModal(false);
  };


  const onDelete = async () => {
    if (!selectedProductId) return;
    setIsDeleting(selectedProductId);
    setIsLoading(true);
    setShowModal(false);

    try {
      const response = await fetch("/product-db/api", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedProductId }),
      });

      if (response.ok) {
        const updated = products.filter((p) => p.id !== selectedProductId);
        setProducts(updated);
      } else {
        setError("Failed to delete product");
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setSelectedProductId(null);
      setIsDeleting(null);
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <table className="min-w-full bg-gray-800 rounded-xl shadow-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-300 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p) => (
            <tr key={p.id} className="hover:bg-gray-700 transition">
              <td className="px-6 py-4 font-medium text-white">{p.title}</td>
              <td className="px-6 py-4 text-gray-400">
                {p.description || "No description available."}
              </td>
              <td className="px-6 py-4 text-green-400 font-bold">
                &#8377; {p.price}
              </td>
              <td className="px-6 py-4 flex items-center justify-center gap-4">
                {/* Edit Icon */}
{/* Edit Icon */}
{
  isDeleting === p.id || isLoading ? (
    <span className="text-blue-400 cursor-not-allowed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13zm0 0V17h4"
        />
      </svg>
    </span>
  ) : (
    <Link className="p-0" href={`/product-db/${p.id}/update`} passHref>
      <button
        title="Edit"
        className="text-blue-400 hover:text-blue-300 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13zm0 0V17h4"
          />
        </svg>
      </button>
    </Link>
  )
}

{/* Delete Icon */}
<button
  title="Delete"
  disabled={isDeleting === p.id || isLoading} // Disable button when deleting or loading
  onClick={() => handleConfirmDelete(p.id)}
  className="text-red-400 hover:text-red-300 transition"
>
  {isDeleting === p.id ? (
    <span className="text-sm">...</span> // Show loading indication
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )}
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={onDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTable;
