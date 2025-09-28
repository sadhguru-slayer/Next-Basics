"use client"

import React from 'react'
import { usePathname }from 'next/navigation';

const AuthPages = ({children}) => {
    const pathname = usePathname();
    const links = [
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Forgot Password', href: '/forgot-password' },
    ];
  return (
    <div>
      <h1>Auth Pages</h1>
      <ul>
        {links.map(link => {
            const isActive = pathname === link.href || pathname.startsWith(link.href) && link.href !== '/';
         return (
          <li className={`${isActive?'font-bold ml-2':''}`} key={link.href}>
            <a href={link.href}>{link.name}</a>
          </li>
        )
        })}
      </ul>
      {children}
    </div>
  )
}

export default AuthPages