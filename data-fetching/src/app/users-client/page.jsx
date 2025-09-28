"use client";
import React, { useState, useEffect } from "react";

const UsersonClientSide = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setUsers(data);
        setError("");
      } catch (error) {
        console.error(error);
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">
        Users (Client Side)
      </h2>

      {loading && <p className="text-center text-gray-600 dark:text-gray-400">Loading users...</p>}
      {error && <p className="text-center text-red-500 dark:text-red-400 font-semibold">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
              {user.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              <span className="font-semibold">Website:</span>{" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {user.website}
              </a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold">Company:</span> {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersonClientSide;
