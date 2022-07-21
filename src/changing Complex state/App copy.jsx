import React,{useState} from 'react'

function App2() {
const [fullName, setFullName] = useState({
  fName: "",
  lName: ""
});

function onchangeHandler(event){
  
}


  return (
    <div className='container'>
        <h1>Hello {fullName.fName} {fullName.lName}</h1>
        <form action="">
            <input type="text" placeholder='First Name'onChange={onchangeHandler} value={fullName.fName} />
            <input type="text" placeholder='Last Name' onChange={onchangeHandler} value={fullName.lName}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default App2