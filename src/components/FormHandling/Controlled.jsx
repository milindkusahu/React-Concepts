// Controlled components - Real time updation of input data using "useState"

import React, { useState } from "react";

const Controlled = () => {
  const [val, setVal] = useState({ name: "", age: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  };

  return (
    <div>
      <h1>Controlled Components</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setVal({ ...val, name: e.target.value });
          }}
          placeholder="name"
          type="text"
        />
        <input
          onChange={(e) => {
            setVal({ ...val, age: e.target.value });
          }}
          placeholder="age"
          type="number"
        />
        <input
          onChange={(e) => {
            setVal({ ...val, email: e.target.value });
          }}
          placeholder="email"
          type="email"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Controlled;
