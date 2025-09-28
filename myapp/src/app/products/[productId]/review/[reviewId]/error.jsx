'use client'; // must be a client component

import { startTransition } from "react";
import React from 'react';
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
    const router = useRouter();
    const reloadPage = ()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        })
    }
  return (
    <div>
      <h2>Oops! Something went wrong while loading the review.</h2>
      <p>{error.message}</p>
      <button onClick={() => reloadPage()}>Try Again</button>
    </div>
  );
}
