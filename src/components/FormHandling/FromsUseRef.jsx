import React, { useRef } from "react";

const FromsUseRef = () => {
  const name = useRef(null);
  const age = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, age.current.value);
  };

  return (
    <div>
      <h1>Form Handling</h1>

      <form action="" onSubmit={handleSubmit}>
        <input ref={name} placeholder="name" type="text" />
        <input ref={age} placeholder="age" type="number" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FromsUseRef;
