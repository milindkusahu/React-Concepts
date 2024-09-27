import React, { useState } from "react";

const UseStateHook = () => {
  const [banned, setBanned] = useState(false);

  return (
    <div className="my-container">
      <h1>{banned.toString()}</h1>
      <button
        onClick={() => {
          setBanned(!banned);
        }}
      >
        Ban Karo
      </button>
    </div>
  );
};

export default UseStateHook;
