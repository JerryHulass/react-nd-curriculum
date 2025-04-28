// Add redux code here.

import TodoItem from './TodoItem';

function TodoList() {
  // Add redux code here.
  const todos = useSelector((state) => state.todos);
  const preferNewestFirst = useSelector((state) => state.preferNewestFirst);
  const taskGoal = useSelector((state) => state.taskGoal);

  const listStyles = {
    listStyle: 'none',
    padding: 0,
  };

  function handleRemoveTodo (index) {
    // Add redux code here.
  };

  function handleRemoveAllTodos () {
    // Add redux code here.
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
      // Add redux code here.
      // Add redux code here.
        Order by {preferNewestFirst ? 'Oldest First' : 'Newest First'}
      </button>
    </div>
  );
}

export default TodoList;
