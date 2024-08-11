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
const cardStyle = {
  height:"450px",
  width:"400px",
  boxShadow : "0 4px 50px rgba(0, 0, 0, 0.1)",
  border : "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius:"10px",
textAlign:"center",
color:"purple",
fontSize:"25px",
marginLeft:"100px",

}
function About() {
  return (
    <div><Navbar/>
      <h1 style={aboutStyle}>About</h1>
    <div style={cardStyle}>
     <img src={aboutimg} height="300px" width="400px"></img>
      About
      </div>
    </div>
  )
}

export default About