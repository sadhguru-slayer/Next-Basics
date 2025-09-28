import React from 'react'
import fs from 'fs';
const ServerComponents2 = () => {
    fs.readFileSync('./Products.jsx','utf-8',(err,data)=>{
        if(err) throw err;
        console.log(err)
    })
  return (
    <div>ServerComponents2</div>
  )
}

export default ServerComponents2