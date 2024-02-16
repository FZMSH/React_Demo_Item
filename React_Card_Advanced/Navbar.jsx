import React from 'react'

function Navbar({data}) {
  return (
   <>
   <div className='flex justify-between px-10 py-2'>
    <h3>Orange</h3>
    <div className='flex gap-2 bg-orange-500 text-white p-1 px-2 rounded-md text-sm'>
        <button >Favourite</button>
        <h3>{data.filter(item=>item.added).length}</h3>
    </div>
   </div>
   </>
  )
}

export default Navbar
