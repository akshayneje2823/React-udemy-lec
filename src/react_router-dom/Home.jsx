// import React from 'react'
import React, {Link}from 'react-router-dom'

function Home() {
  return (
    <>
        <h1>HomePage</h1>
        <p>This is Homepage.</p>
        <p>Click here to About Page</p>
        <Link to='/about'>About</Link>
    </>
  )
}

export default Home