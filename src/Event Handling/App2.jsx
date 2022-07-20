import React,{useState} from 'react'

function App2() {
    const [name, setName] = useState("");

    function onChangeHandler(event){
        setName(event.target.value);
        console.log(event.target.value)
    }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input type="text" placeholder="What's your name?"  onChange={onChangeHandler} />
      <button 
     
      >Submit</button>
    </div>
  )
}

export default App2