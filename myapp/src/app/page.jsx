import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
    <h1>Welcome to the Home Page</h1>
    <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
    </ul>
    <ul>
    <li><Link href="/blog">Blogs</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/products">Products</Link></li>
    <li><Link href="/articles">Articles</Link></li>
    </ul>
    </div>
  )
}

export default Home