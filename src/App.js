import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title container">Student Attendance Portal </h1>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
