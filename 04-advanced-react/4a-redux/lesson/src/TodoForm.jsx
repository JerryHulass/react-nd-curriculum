import { useState } from 'react';
// Add redux code here.

function TodoForm() {
  // Add redux code here.
  const preferDarkMode = useSelector((state) => state.preferDarkMode);
  const [task, setTask] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    if (task.trim()) {
      // Add redux code here.
      setTask('');
    }
  };

  const formStyles = {
    marginBottom: '20px',
  };

  const inputStyles = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginRight: '10px',
    backgroundColor: preferDarkMode ? '#333' : '#fff',
    color: preferDarkMode ? '#fff' : '#000',
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: preferDarkMode ? '#bb86fc' : '#007bff',
    color: 'white',
    cursor: 'pointer',
  };

  const buttonHoverStyles = {
    backgroundColor: preferDarkMode ? '#3700b3' : '#0056b3',
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={inputStyles}
      />
      <button
        type="submit"
        style={buttonStyles}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyles.backgroundColor)
        }
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
