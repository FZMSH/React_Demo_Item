import React, { useState } from 'react'
import Card from './Component/Card';
import Navbar from './Component/Navbar';
function App() {
  const rawdata =[
    { image:'https://images.unsplash.com/photo-1583195763986-0231686dcd43?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Veer Zara',artist:'Sakhawat',added:false},
    {image:'https://images.unsplash.com/photo-1586796676774-c93004ae009f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Junon',artist:'Abidur',added:false},
    {image:'https://plus.unsplash.com/premium_photo-1661759523015-f71f86d87273?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Maana',artist:'Saimon',added:false},
    {image:'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Befarwa',artist:'Hafiz',added:false},
    {image:'https://images.unsplash.com/photo-1618716060974-98b20e2395cd?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Haalwa',artist:'Rahul',added:false}
  ]
  const [data,setData] =useState(rawdata)

  const handclickbutton = (cardindex)=>{
    setData((prev)=>{
      return prev.map((item,index)=>{
        if(cardindex === index){
          return {...item,added:!item.added}
        }
        return item
       })
    })
  }
  return (
    <>
    <div className='w-full h-screen bg-zinc-200'>
      <Navbar data={data}/>
      <div className='flex flex-wrap gap-10 py-5 px-6'>
      {data.map((item,index)=>(
        <Card key={index} handclick={handclickbutton} values={item} index={index}/>
      )
      )}
      </div>
     
    </div>
    </>
  )
}

export default App
