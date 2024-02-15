import React from "react";

function Card({ values, handclick,index}) {
  
  const { name, image, profession, friends } = values;
  return (
    <>
      <div className="w-52 bg-zinc-200 overflow-hidden rounded-md">
        <div className="bg-sky-300 w-full h-32 overflow-hidden object-center">
          <img src={image} alt="" />
        </div>
        <div className="w-full p-3">
          <h3 className="font-semibold">{name}</h3>
          <h5 className="text-xs">{profession}</h5>
          <button onClick={()=>handclick(index)} className="bg-blue-400 text-white mt-3 rounded-md text-xs font-semibold px-3 py-1">
            {friends === true ?'Friends':'Add Friends'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
