import React, { useEffect, useState } from "react";
import styles from "./Todo.module.css";

const Todo = () => {
  const [toDoItem, setTodoItem] = useState([]);
  const [input, setInput] = useState("");

  const addToDoItem = () => {
    if (!input.trim()) return;
    setTodoItem([...toDoItem, input]);
    setInput("");
  };

  const deleteHandler = (index) => {
    const filteredList = toDoItem.filter((_, i) => i !== index);
    setTodoItem(filteredList);
  };

  useEffect(() => {
    const saveToDo = localStorage.getItem("toDoItem");
    if (saveToDo) {
      console.log("Loading saved todos from localStorage:", saveToDo);
      setTodoItem(JSON.parse(saveToDo));
    }
  }, []);

  useEffect(() => {
    console.log("Saving todos to localStorage:", toDoItem);
    localStorage.setItem("toDoItem", JSON.stringify(toDoItem));
  }, [toDoItem]);

  return (
    <div className={styles.main}>
      <h1 className={styles.heading1}>Todo</h1>
      <div className={styles.todoinput}>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addToDoItem}>Add</button>
      </div>
      {toDoItem.map((item, index) => (
        <div key={index} className={styles.todoItem}>
          <li>{item}</li>
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
