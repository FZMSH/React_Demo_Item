import React, { useState } from "react";
import Card from "./assets/Card";
function App() {
  const raw = [
    {name:'Jhon',profession:'Painter', image:'https://images.pexels.com/photos/1089038/pexels-photo-1089038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',friends:false},
    {name:'Sumit',profession:'Coder',image:'https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',friends:false},
    {name:'Abidur',profession:'Handler',image:'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',friends:false},
    {name:'Saimon',profession:'Plumber',image:'https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',friends:false}
  ]
  const[data,setData] =useState(raw)

  const handler = (changeindex)=>{
   setData((prev)=>{
   return prev.map((item,idx)=>{
      if(idx === changeindex){
        return {...item,friends:!item.friends}
      }
      return item
    })
   })
  }
  return (
    <>
     <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
     {data.map((item,index)=>(
      <Card key={index} index={index} values={item} handclick={handler}/>
     ))}
     </div>
    </>
  );
}

export default App;
