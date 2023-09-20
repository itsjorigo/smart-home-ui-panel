import "./App.css";
import { Outlet } from "react-router-dom";
import NavIcon from "./compornents/nav-icon/nav-icon";


function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavIcon route="home" />
        <NavIcon route="settings" />
      </div>
      <div className="widgets"></div>
      <Outlet />
    </div>
  );
}

export default App;


