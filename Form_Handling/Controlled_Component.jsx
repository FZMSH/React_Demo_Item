import React, { useRef, useState } from 'react'

function App() {
  const [val,setVal] =useState({name:'',email:''})

  const handle = (event)=>{
    event.preventDefault()
    console.log(val)
  }
  return (
    <>
    <form onSubmit={handle} action="">
      <input onChange={(event)=>setVal({...val,name:event.target.value})} type="text" placeholder='name' />
      <input onChange={(event)=>setVal({...val,email:event.target.value})} type="text" placeholder='email'/>
      <input type="submit" />
    </form>
    </>
  )
}

export default App
