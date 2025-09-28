// import { clientUtil } from '@/utils/client-utils'; // This will give error because we cannot use client side code in server component
import React from 'react'
import { serverUtil } from '../../utils/server-utils'

import ImageSlider from '@/components/ImageSlider';
// Here in server component we cannot use some third party libraries like react-slick
// because they depend on browser APIs which are not available in server environment
// So we can use such libraries only in client components
//----------------------------//
// To tackle this we can create a client component for such libraries and use that component in server component
//----------------------------//
const ServerRoute = () => {
    const message = serverUtil();
    // const clientMessage = clientUtil();
  return (
    <div>ServerRoute {message} 
    <ImageSlider />
    </div>
  )
}

export default ServerRoute