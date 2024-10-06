import React from "react";

const Card = ({ values, handleClick, index }) => {
  const { image, name, artist, added } = values;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="">
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 whitespace-nowrap ${
          added ? "bg-blue-400" : "bg-orange-600"
        } absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-sm rounded-full`}
      >
        {added ? "Added" : "Add to Favourites"}
      </button>
    </div>
  );
};

export default Card;
