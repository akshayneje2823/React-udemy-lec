import React,{useState} from 'react'

function App2() {
    const [name, setName] = useState("");
    const [getName, setgetName] = useState(" ")

    function onChangeHandler(event){
        setName(event.target.value);
        // console.log(event.target.value)
    }
    function onclickHandler(event){
        // console.log(setgetName)
        // console.log(name);
        setgetName(name);
    }
  return (
    <div className="container">
      <h1>Hello {getName}</h1>
      <input  type="text" placeholder="What's your name?"  onChange={onChangeHandler} />
      <button 
      onClick={onclickHandler}
      >Submit</button>
    </div>
  )
}

export default App2