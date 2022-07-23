import React, { useState } from 'react'
import InpuArea from './InpuArea';
import To_Dos from './To_Dos';

function App() {

  const [inputText, setInputText] = useState("");
  const [inputItems, setInputItems] = useState([])


  function inputHandler(event) {
    let inputValue = event.target.value
    //  console.log(inputValue)
    setInputText(inputValue)
  };



  function getItemsHandler() {
    setInputItems((prevItems) => {
      // console.log(prevItems)
      return [...prevItems, inputText]
    });
    setInputText("")
  }

  

  const deleteItem = (id) => {
    setInputItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id
      })
    })
  }



  return (
    <div className='container'>
      <div className="heading">
        <h1>To-Do-List</h1>
      </div>
      <div className="form">
        <InpuArea
          inputText={inputText}
          inputHandler={inputHandler}
          getItemsHandler={getItemsHandler}
        />
      </div>
      <ul>
        {
          inputItems.map((toDoItems, index) =>
            <To_Dos
              key={index}
              id={index}
              deleteItem={deleteItem}
              toDoItems={toDoItems} />
          )
        }
      </ul>
    </div>
  )
}

export default App