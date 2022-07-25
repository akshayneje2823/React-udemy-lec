import React, {Link}from 'react-router-dom'

function About() {
  return (
    <>
        <h1>About Page</h1>
        <p>This is AboutPage.</p>
        <p>Click here to Home Page</p>
        <Link to='/home'>Home</Link>
    </>
  )
}

export default About