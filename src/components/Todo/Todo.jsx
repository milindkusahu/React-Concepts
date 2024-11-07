import React, { useEffect, useState } from "react";
import styles from "./Todo.module.css";

const loadStoredTodoItems = () => {
  // Load the stored items from localStorage on initial render
  const savedToDoItems = localStorage.getItem("toDoItem");
  return savedToDoItems ? JSON.parse(savedToDoItems) : [];
};

const saveToDoItemsToLocalStorage = (toDoItem) => {
  localStorage.setItem("toDoItem", JSON.stringify(toDoItem));
};

const Todo = () => {
  const [toDoItem, setTodoItem] = useState(loadStoredTodoItems);
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
    // Save the updated todo items to localStorage whenever the list changes
    saveToDoItemsToLocalStorage(toDoItem);
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
