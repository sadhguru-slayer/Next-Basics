import React from 'react'

const NavLinks = () => {
    console.log('NavLinks rendered');
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]
  return (
    <ul className="flex space-x-6">
      {
        links.map((link)=>(
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-lg font-medium text-purple-700 hover:text-purple-900 transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default NavLinks