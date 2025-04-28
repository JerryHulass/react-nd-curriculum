import { createStore } from 'redux';

const initialState = {
  todos: ['Buy milk', 'Walk the dog', 'Do the dishes'],
  loggedIn: false,
  preferNewestFirst: false,
  preferDarkMode: false,
  taskGoal: 0,
  user: {
    username: '',
    isAdmin: false,
  },
};

function rootReducer (state = initialState, action) {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [...state.todos, action.task],
    };
  } else if (action.type === 'SET_TASK_GOAL') {
    return {
      ...state,
      taskGoal: action.taskGoal,
    }
  } else if (action.type === 'TOGGLE_DARK_MODE') {
    return {
      ...state,
      preferDarkMode: !state.preferDarkMode,
    };
  } else if (action.type === 'DELETE_ALL_TODOS') {
    return {
      ...state,
      todos: [],
    }; 
  } else if (action.type === 'REMOVE_TODO') {
    return {
      ...state,
      todos: state.todos.filter((_, index) => index !== action.index),
    };
  } else if (action.type === 'TOGGLE_LOGIN') {
    return {
      ...state,
      loggedIn: !state.loggedIn,
    };
  } else if (action.type === 'SET_USERNAME') {
    return {
      ...state,
      user: {
        ...state.user,
        username: action.username,
        isAdmin: action.username === 'colin', // Hardcoded admin username
      },
    };
  } else if (action.type === 'TOGGLE_ORDER') {
    return {
      ...state,
      preferNewestFirst: !state.preferNewestFirst,
    };
  } else {
    return state;
  }
};

export const store = createStore(rootReducer);
