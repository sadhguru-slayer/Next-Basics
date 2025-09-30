"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const {pending} = useFormStatus();
  return (
        <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition disabled:text-green-400 disabled:bg-gray-500"
            disabled={pending}
            >
          {
            pending ? "Creating..." : "Create Product"
          }
          </button>
  )
}

export default SubmitButton