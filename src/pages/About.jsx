import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "flexDirection":"column", "fontSize": "xx-large"}}>
        <div>About</div>
        <Link to={"/"}>Go to Home</Link>
      </div>
  )
}

export default About