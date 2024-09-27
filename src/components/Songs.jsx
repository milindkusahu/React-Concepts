import React from "react";

const Songs = () => {
  const data = [
    {
      name: "Mahiya Ve",
      description: "Lorem Ipsum has been the industry's been the industry's.",
    },
    {
      name: "One Bottole Down",
      description: "Lorem Ipsum has been the industry's been the industry's.",
    },
    {
      name: "Brown Rang",
      description: "Lorem Ipsum has been the industry's been the industry's.",
    },
  ];

  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col items-center justify-center gap-4">
      {data.map((elem, index) => (
        <div
          key={index}
          className="w-90 px-4 py-3 bg-white rounded-lg shadow-md"
        >
          <h3 className="font-semibold text-lg">{elem.name}</h3>
          <p className="text-xs mt-1 text-gray-600">{elem.description}</p>
          <button
            onClick={() => {
              alert(elem.name);
            }}
            className="px-3 py-1 bg-blue-500 text-xs font-semibold text-white rounded mt-2 hover:bg-blue-600"
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Songs;
