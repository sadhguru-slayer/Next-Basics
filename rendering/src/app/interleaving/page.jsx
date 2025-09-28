import React from 'react'
import ClientComponent1 from '@/components/ClientComponent1'
import ServerComponents1 from '@/components/ServerComponents1'

//What is interleaving?
//Ans -> Interleaving is a technique used to mix static and dynamic content in a single file, allowing for more flexible and efficient rendering of components.

const InterLeaving = () => {
  return (
    <div>InterLeaving
    
    <p>
    So here we can see how to interleave static and dynamic content in a single file.
    </p>
    <p>
    We have 4 ways of doing it.
    </p>
    <ul>
    <li>1. Client component inside a client component, [easily done]</li>
    <li>2. Server component inside a server component, [easily done]</li>
    <li>3. Client component inside a server component, yes this works 👍</li>
    <li>4. Server component inside a client component, this might not work traditionaly so we did it using the components and children props</li>
    </ul>
    {/* So this is the 4th method of interleaving */}
    <ClientComponent1>
    <ServerComponents1/>
    </ClientComponent1>
    </div>
  )
}

export default InterLeaving