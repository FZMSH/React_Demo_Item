import React, { useRef, useState } from 'react'

function App() {
 const name = useRef(null);
 const age = useRef(null);
 const email = useRef(null);
 const handle = (event)=>{
event.preventDefault()
console.log(name.current.value,age.current.value)
 }
  return (
    <>
    <form onSubmit={handle} action="">
      <input ref={name} placeholder='Name' type="text" />
      <input ref={age} placeholder='age' type="text" />
      <input type="submit" />
    </form>
    </>
  )
}

export default App
