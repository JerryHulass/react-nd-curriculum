import { useDispatch, useSelector } from 'react-redux';

import TodoItem from './TodoItem';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const preferNewestFirst = useSelector((state) => state.preferNewestFirst);
  const taskGoal = useSelector((state) => state.taskGoal);

  const listStyles = {
    listStyle: 'none',
    padding: 0,
  };

  const handleRemoveTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', index });
  };

  const handleRemoveAllTodos = () => {
    dispatch({ type: 'RESET_TODOS' });
  };

  const sortedTodos = preferNewestFirst ? [...todos].reverse() : todos;

  return (
    <div>
      <ul style={listStyles}>
        {sortedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onRemove={() => handleRemoveTodo(index)}
          />
        ))}
      </ul>
      <p>&nbsp;{taskGoal > 0 && <span>Task Goal: {taskGoal}</span>}</p>
      <button onClick={() => dispatch({type: 'DELETE_ALL_TODOS'})}>Delete All Todos</button>
      <button onClick={() => dispatch({ type: 'TOGGLE_ORDER' })}>
        Order by {preferNewestFirst ? 'Oldest First' : 'Newest First'}
      </button>
    </div>
  );
}

export default TodoList;
