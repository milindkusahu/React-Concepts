import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForms = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h1>React Hook Forms</h1>

      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("name")} placeholder="name" type="text" />
        <input {...register("age")} placeholder="age" type="number" />
        <input {...register("email")} placeholder="email" type="email" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactHookForms;
