import React from 'react'

function InpuArea(props) {
  return (
    <div> 
    
    <input type="text"
    value={props.inputText}
    onChange={props.inputHandler}
     />

    <button
     onClick={props.getItemsHandler}
     type='submit'>
        <span>Add</span>
    </button>
    
    </div>
  )
}

export default InpuArea