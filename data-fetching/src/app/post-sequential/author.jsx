import React from 'react'

const AuthorName = async ({userId}) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await response.json()
  return (
    <div className="text-sm text-gray-300  font-bold">
    {user.name}
    </div>
  )
}

export default AuthorName