import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import React from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
            <Button color="primary" className="m-2">
                Button
            </Button>
            <Button color="primary" className="m-2">
        <span className="btn-wrapper--icon">
        </span>
                <span className="btn-wrapper--label">Left icon</span>
            </Button>
            <Button color="primary" className="m-2">
                <span className="btn-wrapper--label">Right icon</span>
                <span className="btn-wrapper--icon">
        </span>
            </Button>
            <Button color="primary" className="m-2">
        <span className="btn-wrapper--icon">
        </span>
            </Button>
    </div>
  );
}

export default App;
