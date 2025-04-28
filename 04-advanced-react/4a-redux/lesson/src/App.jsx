import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import TodoContainer from './TodoContainer';

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.user);
  const preferDarkMode = useSelector((state) => state.preferDarkMode);

  function handleLogin (e) {
    e.preventDefault();
    const username = e.target.username.value;
    dispatch({ type: 'SET_USERNAME', username: username });
    dispatch({ type: 'TOGGLE_LOGIN' });
  }

  function handleLogout (e) {
    e.preventDefault();
    dispatch({ type: 'SET_USERNAME', username: '' });
    dispatch({ type: 'TOGGLE_LOGIN' });
  }

  const appStyles = {
    backgroundColor: preferDarkMode ? '#121212' : '#fff',
    color: preferDarkMode ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={appStyles}>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <Header />
          <h2>Hello, {user.username}</h2>
          <form onSubmit={handleLogout}>
            <button type="submit">Log Out</button>
          </form>
          {user.isAdmin && <p>Welcome, admin!</p>}
          <TodoContainer />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
