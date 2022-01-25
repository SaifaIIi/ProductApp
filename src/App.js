// import logo from "./logo.svg";
import "./App.css";
import Navi from "./components/Navi";
import { BrowserRouter, Route } from "react-router-dom";
import Sign from "./components/Sign";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import AddItem from "./components/AddItem";
import List from "./components/List";
import ViewItem from "./components/ViewItem";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          width: "90vw",
          justifyContent: " space-evenly",
        }}
      >
        <BrowserRouter>
          <Route
            exact
            path="/"
            component={localStorage.getItem("tokan") ? Navi : Sign}
          />
          <Route
            path="/home"
            component={localStorage.getItem("tokan") ? Home : Sign}
          />
          <Route
            path="/a"
            component={localStorage.getItem("tokan") ? AddItem : Sign}
          />
          <Route
            path="/l"
            component={localStorage.getItem("tokan") ? List : Sign}
          />
          <Route
            path="/v"
            component={localStorage.getItem("tokan") ? ViewItem : Sign}
          />
          <Route path="/sign" component={Sign} />
          <Route path="/signUp" component={SignUp} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
