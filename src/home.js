import React from 'react'
import Navbar from "./navbar"
function home() {
  return (<div><Navbar/>
    <div style={{
color:"white",
backgroundColor:"purple",
textAlign:"center",
padding:"2px",
borderRadius:"6px"
}}><h1>Home</h1></div></div>
  )
}

export default home