import React from 'react'
import Link from 'next/link';
const randomNumber = (n)=>{
  return Math.floor(Math.random() * n);
}
const Notifications = async () => {
  const number = randomNumber(10);
  if(number%2===0){
    await new Promise((resolve)=>setTimeout(resolve,3000));
  }
  return (
    <div>Notifications
    <div className="">
    <Link href="/c-dashboard/archived">Archived Notifications</Link>
    </div>
    </div>
  )
}

export default Notifications