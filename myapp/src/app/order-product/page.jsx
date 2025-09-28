"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const OrderProduct = () => {
    const router = useRouter();
    const handleClick = ()=>{
        console.log("Order Placed");
        router.push('/products');
    }
  return (
    <div>OrderProduct
    
    <button className='bg-amber-600' onClick={handleClick}>Order</button>
    </div>
  )
}

export default OrderProduct