import "./App.css";
import { Footer, Header, Main, Navbar } from "./components";

function App() {
  const header_container = {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    //alignItems: "center",

    maxHeight: "200px",
  };

  return (
    <>
      <div className="container-fluid" style={{ padding: "0" }}>
        <div className="row" style={header_container}>
          {/* Header  90% */}
          <Header />
          {/* Navbar 10% */}
          <Navbar />
        </div>
        <div className="row">
          {/* Main */}
          <Main />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
