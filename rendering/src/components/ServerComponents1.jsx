import React from 'react'
import fs from 'fs';
const ServerComponents1 = () => {
    fs.readFileSync('src/middleware.js','utf-8');
    
  return (
    <div>ServerComponents1</div>
  )
}

export default ServerComponents1