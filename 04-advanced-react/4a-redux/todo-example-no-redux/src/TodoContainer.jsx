import {useState} from 'react';

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoActions from './TodoActions';

const initialTodos = [
  {
    task: 'Learn Prop Drilling',
    id: 1,
    completed: true,
  },
  {
    task: 'Learn Redux',
    id: 2,
    completed: true,
  },
  {
    task: 'Learn Redux Toolkit',
    id: 3,
    completed: false,
  }
]

const TodoContainer = (props) => {
  const [todos, setTodos] = useState(initialTodos);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const markAllComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: true }))
    );
  };

  const deleteAllCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const containerStyles = {
    padding: "20px",
    backgroundColor: isDarkMode ? "#1f1f1f" : "#f8f8f8",
    border: isDarkMode ? "1px solid #444" : "1px solid #ddd",
    borderRadius: "8px",
    margin: "20px",
    color: isDarkMode ? "white" : "black",
  };

  const buttonStyles = {
    backgroundColor: isDarkMode ? "#bb86fc" : "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  };

  const buttonHoverStyles = {
    backgroundColor: isDarkMode ? "#3700b3" : "#0056b3",
  };

  return (
    <div style={containerStyles}>
      <button
        style={buttonStyles}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyles.backgroundColor)
        }
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <TodoForm addTodo={addTodo} isDarkMode={isDarkMode} />
      <TodoList
        isDarkMode={isDarkMode}
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />

      <TodoActions
        isDarkMode={isDarkMode}
        markAllComplete={markAllComplete}
        deleteAllTodos={deleteAllTodos}
        deleteAllCompleted={deleteAllCompleted}
      />
    </div>
  );
};

export default TodoContainer;
