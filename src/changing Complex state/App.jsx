import React,{useState} from 'react'

function App() {
const [fName, setfName] = useState("");
const [lName, setlName] = useState("");

function updateHandler(event){
  const firstName = event.target.value
  return setfName(firstName);
}
function updateHandler2(event){
  const lastName = event.target.value
  return setlName(lastName)
  
}

  return (
    <div className='container'>
        <h1>Hello {fName}{lName}</h1>
        <form action="">
            <input type="text" placeholder='First Name'onChange={updateHandler} value={fName} />
            <input type="text" placeholder='Last Name' onChange={updateHandler2} value={lName}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default App