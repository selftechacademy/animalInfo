import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../../components/todoItem/TodoItem";

import "./todoApp.style.css";

const TodoApp = () => {
  const [todo, setTodo] = useState({ text: "", id: "", isCompleted: false });
  const [todoList, setTodoList] = useState([]);

  const onInputChange = (e) => {
    setTodo({ text: e.target.value, id: "", isCompleted: false });
  };

  const onAddClick = () => {
    setTodoList([...todoList, { ...todo, id: uuidv4() }]);
    setTodo({ text: "", id: "" });
    console.log("todoList", todoList);
  };

  const deleteTodo = (id) => {
    setTodoList([...todoList.filter((el) => el.id !== id)]);
  };

  const completeTodo = (id) => {
    const newTodoList = todoList.map((el) => {
      if (el.id === id) {
        return { ...el, isCompleted: !el.isCompleted };
      } else {
        return el;
      }
    });

    setTodoList([...newTodoList]);
  };

  return (
    <div className="todo-app">
      <h1>TodoApp</h1>
      <div className="input-bar">
        <input name="todo" value={todo.text} onChange={onInputChange} />
        <button onClick={onAddClick}>ADD</button>
      </div>
      <div className="todolist-view">
        {todoList.map((el, index) => (
          <TodoItem
            key={index}
            todoText={el.text}
            todoId={el.id}
            isCompleted={el.isCompleted}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
