import React,{useState} from 'react'
import ComA from './ComA'

function ComB() {
    const [variable, setvariable] = useState('')
    const comAHandler = ()=>{
        setvariable(<ComA/>)
    }
  return (
    <div>
        {variable}
        <button onClick={comAHandler}>Click</button>
    </div>
  )
}

export default ComB