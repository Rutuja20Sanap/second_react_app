import React from 'react';
import Navbar from "./navbar"
import aboutimg from "./about.png";
const aboutStyle = {
  color:"white",
backgroundColor:"purple",
textAlign:"center",
padding:"20px",
borderRadius:"6px",
marginBottom:"30px"
};

function About() {
  return (
    <div><Navbar/>
      <h1 style={aboutStyle}>About</h1>
     </div>
  
  )
}

export default About