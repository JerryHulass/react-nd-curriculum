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
  return state;
};

export const store = createStore(rootReducer);
