"use client" // THis is a client component
import { useState } from "react"

const Dashboard = () => {
    const [name,setName] = useState("");
    console.log("name"); // This will log on only browser if navigated to dashboard page else(reloaded,force url change) it will log on server also
  return (
    <div>Dashboard
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <p>Hello, {name}!</p>
    </div>
  )
}

export default Dashboard