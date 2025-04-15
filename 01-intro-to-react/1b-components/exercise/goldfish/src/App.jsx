import "./App.css";
import { Header, Main, Sidebar } from "./components";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
