import React from 'react'
import Link from 'next/link';
const randomNumber = (n)=>{
  return Math.floor(Math.random() * n);
}
const ArchivedNotifications = async () => {
  const number = randomNumber(10);
  if(number%2===0){

    await new Promise((resolve)=>{setTimeout(resolve,1000)});
  }
  return (
    <div>Archived Notifications
    
    <div className="">
    <Link href="/c-dashboard">Back to Notifications</Link>
    </div>
    </div>
  )
}

export default ArchivedNotifications