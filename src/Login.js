import axios from 'axios'
import React, { useState } from 'react'
import { Detail } from './detail'

export const Login = () => {

  const [uname,setUnmame]=useState("")
  const [pass,setPass]=useState("")
  const [valid,isValid]=useState(false)


  const data={
    uname,
    pass,
  }
  const check=(e)=>{
    e.preventDefault();

    axios.post(`http://localhost:8000/login`,data)
    .then((res)=>{
        res.data==="error"?(isValid(true)):isValid(false)
        console.log(res.data);
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div>
        <input type="text" onChange={(e)=>setUnmame(e.target.value)} />
        <input type="password" onChange={(e)=>setPass(e.target.value)} />
        <button onClick={check}>add</button>
        <div>{valid?(<Detail />):null}</div>
    </div>
  )
}
