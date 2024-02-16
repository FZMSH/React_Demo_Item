import React from "react";

function Card({ values, handclick, index }) {
  const { name, image, artist, added } = values;
  return (
    <>
      <div>
        <div className="w-52 bg-white rounded-md relative">
          <div className="w-full h-32 object-center overflow-hidden">
            <img src={image} alt="" />
          </div>
          <h3 className="font-semibold px-1 py-3">{artist}</h3>
          <h5 className="text-xs px-1 pb-2">{name}</h5>
          <button
            onClick={() => handclick(index)}
            className="bg-orange-500 text-white text-xs p-1 rounded-md absolute translate-x-[130%] -translate-y-4 "
          >
            {added===true?'Added':'Add to Favourite'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
