import React from "react";
import PropTypes from "prop-types";
import "./todoItem.style.css";

const TodoItem = ({
  todoText,
  todoId,
  isCompleted,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => completeTodo(todoId)}
      />
      <p style={{ textDecoration: `${isCompleted ? "line-through" : "none"}` }}>
        {todoText}
      </p>
      <button onClick={() => deleteTodo(todoId)}>X</button>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
