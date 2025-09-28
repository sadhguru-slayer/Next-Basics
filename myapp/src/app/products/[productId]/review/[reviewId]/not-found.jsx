'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Redirecting from './redirecting';

const NotFound = ({ limit }) => {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);


  useEffect(() => {
    console.log(limit)
    if (limit > 100) {
      setIsRedirecting(true);
      const timer = setTimeout(() => {
        router.push('/products'); // Client-side redirect
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

    if (isRedirecting) {
    return <Redirecting />;
  }
  return (
    <>
      <div>Review Not Found</div>
      <p>The review you're looking for doesn't exist as the limit is {limit}.</p>
    </>
  );
};

export default NotFound;
