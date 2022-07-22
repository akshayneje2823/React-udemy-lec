import React,{useState} from 'react'

function App() {
     
    const [inputText, setInputText] = useState("");
    const [inputItems,setInputItems] = useState([])

    function inputHandler(event){
       let inputValue = event.target.value
       console.log(inputValue)
       setInputText(inputValue)
    };

  function getItemsHandler(){
    setInputItems((prevItems)=>{
      console.log(prevItems)
      return [...prevItems ,inputText]
    });
    setInputText("")
  }

  return (
    <div className='container'>
        <div className="heading">
            <h1>To-Do-List</h1>
        </div>
        <div className="form">

            <input type="text"
            value={inputText}
            onChange={inputHandler}
             />

            <button
             onClick={getItemsHandler}
             type='submit'>
                <span>Add</span>
            </button>

        </div>
            <ul>
                {
                    inputItems.map(toDoItems=> <li>{toDoItems}</li> )
                }
            </ul>
    </div>
  )
}

export default App