import React, { useState } from "react";

const UseStateHook = () => {
  const [banned, setBanned] = useState(false);
  const [score, setScore] = useState(0);
  const [val, setVal] = useState({ name: "harsh", isBanned: false }); // Objects and Arrays are Reference Type
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="my-container">
      {num.map((ele, index) => (
        <li key={index}>{ele}</li>
      ))}

      <button
        onClick={() =>
          setNum(() => num.filter((item, index) => index != num.length - 1))
        }
      >
        Click
      </button>

      {/* Basic */}
      <div>
        <h1>{banned.toString()}</h1>
        <button
          onClick={() => {
            setBanned(!banned);
          }}
        >
          Ban Karo
        </button>
      </div>

      {/* Advance */}
      <div>
        <h1>{val.name}</h1>
        <h1>{val.isBanned.toString()}</h1>
        <button
          style={!val.isBanned ? { background: "red" } : { background: "blue" }}
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        >
          Change
        </button>
      </div>

      {/* Counter */}
      <div>
        <h1>{score}</h1>
        <button
          onClick={() => {
            // setScore(score + 1);
            setScore((prev) => prev + 1);
          }}
        >
          Counter
        </button>
        <br />
        <button
          onClick={() => {
            setScore(0);
          }}
        >
          Rest Counter
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;
