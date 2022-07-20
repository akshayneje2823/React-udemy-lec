import React, { useState } from 'react'

function App() {
    const [Heading, setHeading] = useState("Hello");
    const [isMouseOver,setMouseOver]=useState(false)


    function clickHandler(){
        console.log("clicked")
    }
    function MouseOut(){
        console.log("MouseOut");
        setMouseOver(false)
    }
    function MouseOver(){
        console.log("MouseOver");
        setMouseOver(true)
    }

  return (
    <div className='container'>
        <h1>{Heading}</h1>
        <input type="text" placeholder='What is your name?' id="demo" />
        <button 
        style={{backgroundColor:isMouseOver? "black" : "white"}}
        onClick={clickHandler}
        onMouseOut={MouseOut}
        onMouseOver={MouseOver} 
        >Submit</button>
    </div>
  )
}

export default App