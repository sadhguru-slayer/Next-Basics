import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>F1 Content
    <ul>
    <li>
    <Link href="/f1/f2">F2</Link>
    </li>
    <li>
    <Link href="/f3">F3</Link>
    </li>
    </ul>
    </div>
  )
}

export default page