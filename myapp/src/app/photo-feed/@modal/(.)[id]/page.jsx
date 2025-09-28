"use client";
import React, { useState, useEffect } from "react";
import data from "../../data";
import { useRouter } from "next/navigation";

export default function PhotoModal({ params }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const photo = data.find((item) => item.id === Number(params.id));

  if (!photo) return null;

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      router.back();
    }, 300); // Wait for the fade-out animation to complete
  };



  return (
    <div
      className={`fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeModal} // Close the modal when clicking the background
    >
      <div
        className="bg-white p-6 rounded shadow-lg max-w-lg w-full transition-all duration-500 transform scale-95 ease-in-out"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the modal content
      >
        <div className="w-full cursor-pointer text-right" onClick={closeModal}>
        X
        </div>
      <div className="">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg"
        />
        <h2 className="text-xl font-bold mb-2">{photo.title}</h2>
        <p className="text-gray-600">{photo.description}</p>
        </div>
        
      </div>
    </div>
  );
}
