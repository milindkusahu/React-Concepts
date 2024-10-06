import React from "react";

const Card = ({ handleClick, index, values }) => {
  const { name, profession, image, friends } = values;
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-40 bg-sky-200">
        <img
          className="w-full h-full object-cover object-[center_top]"
          src={image}
          alt={name}
        />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`mt-4 px-3 py-1 text-xs text-white ${
            friends ? "bg-green-500" : "bg-blue-500"
          } font-semibold rounded-md`}
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Card;
