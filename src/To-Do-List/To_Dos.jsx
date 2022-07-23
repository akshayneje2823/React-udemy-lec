import React,{useState} from 'react'

function To_Dos(props) {
    const [isDone, setisDone] = useState(false);

    // const lineThroughHandler = () =>{
    //     setisDone((prevVal)=> !prevVal)
    // }
  return (
    <div onClick={()=>{
        return props.deleteItem(props.id)
    }}>
        <li style={{ "textDecorationLine" : isDone ? "line-through" :"none"}}>{props.toDoItems}</li>
    </div>
  )
}

export default To_Dos