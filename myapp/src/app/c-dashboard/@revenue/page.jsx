import React from 'react'

const randomNumber = (n)=>{
  return Math.floor(Math.random() * n);
}
const Revenue = async () => {
  const number = randomNumber(10);
  if(number%2===0){
    
    await new Promise((resolve)=>setTimeout(resolve,3000));
  }
  return (
    <div>Revenue</div>
  )
}

export default Revenue