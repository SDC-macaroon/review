import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello from App Component</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
