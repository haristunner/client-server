import axios from 'axios'
import React, { useState } from 'react'

export const Login = () => {

  const [uname,setUnmame]=useState("")
  const [pass,setPass]=useState("")

  const data={
    uname,
    pass
  }
  const check=(e)=>{
    e.preventDefault()

    axios.post(`http://localhost:8000/login`,data)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }

  return (
    <div>
        <input type="text" onChange={(e)=>setUnmame(e.target.value)} />
        <input type="password" onChange={(e)=>setPass(e.target.value)} />
        <button onClick={check}>add</button>
    </div>
  )
}
