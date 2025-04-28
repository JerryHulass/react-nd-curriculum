import { useSelector, useDispatch } from 'react-redux';

function Footer() {
  const dispatch = useDispatch();
  const preferDarkMode = useSelector((state) => state.preferDarkMode);
  const todos = useSelector((state) => state.todos);
  const taskGoal = useSelector((state) => state.taskGoal);

  const footerStyles = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: preferDarkMode ? '#1f1f1f' : '#f0f0f0',
    borderTop: preferDarkMode ? '1px solid #444' : '1px solid #ddd',
    color: preferDarkMode ? 'white' : 'black',
    textAlign: 'center',
  };

  const inputStyles = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: preferDarkMode ? '#333' : '#fff',
    color: preferDarkMode ? '#fff' : '#000',
    marginTop: '10px',
  };

  function handleTaskGoalChange (e) {
    dispatch({ type: 'SET_TASK_GOAL', taskGoal: e.target.value });
  };

  const totalTasks = todos.length;

  return (
    <footer style={footerStyles}>
      <p>Total Tasks: {totalTasks}</p>
      <div>
        <label>Task Goal for Today: </label>
        <input
          type="number"
          value={taskGoal}
          onChange={handleTaskGoalChange}
          style={inputStyles}
        />
      </div>
    </footer>
  );
}

export default Footer;
