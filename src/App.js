import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// use  react-web-session library to add session
// this can doo every thing for us
// simple and small integration with highly modify able code.
// it will let you know every thing about user activity
import ReactWebSession, { updateSession } from "react-web-session";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();
function App() {
  const [sessionData, updateSessionData] = useState(null);

  const handleCallBack = (sessionData) => {
    console.log(sessionData);
    updateSessionData(sessionData);
  };

  return (
    <div className="App">
      <ReactWebSession callback={handleCallBack} data={{ newUser: true }} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web Sessions implementation.</p>
        <a className="App-link">Session Started</a>
        <p></p>
      </header>
    </div>
  );
}

export default App;
