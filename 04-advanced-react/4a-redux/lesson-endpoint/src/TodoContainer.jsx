import { useSelector } from 'react-redux';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoContainer() {
  const preferDarkMode = useSelector((state) => state.preferDarkMode);

  const containerStyles = {
    padding: '20px',
    backgroundColor: preferDarkMode ? '#1f1f1f' : '#f8f8f8',
    border: preferDarkMode ? '1px solid #444' : '1px solid #ddd',
    borderRadius: '8px',
    margin: '20px',
    color: preferDarkMode ? 'white' : 'black',
  };

  return (
    <div style={containerStyles}>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
