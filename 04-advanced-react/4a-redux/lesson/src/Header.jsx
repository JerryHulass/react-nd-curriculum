// Add redux code here.

function Header() {
  // Add redux code here.
  const preferDarkMode = useSelector((state) => state.preferDarkMode);

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: preferDarkMode ? "#1f1f1f" : "#f0f0f0",
    padding: '10px 20px',
    borderBottom: preferDarkMode ? '1px solid #333' : '1px solid #ddd',
  };

  const buttonStyles = {
    backgroundColor: preferDarkMode ? '#bb86fc' : '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const buttonHoverStyles = {
    backgroundColor: preferDarkMode ? '#3700b3' : '#0056b3',
  };

  return (
    <header style={headerStyles}>
      <h1>Todo List App</h1>
      <button
        style={buttonStyles}
        onMouseEnter={(e) =>
          (e.target.style.backgroundColor = buttonHoverStyles.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.target.style.backgroundColor = buttonStyles.backgroundColor)
        }
        // Add redux code here.
      >
        {preferDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
