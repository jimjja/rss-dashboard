import React, { Component } from "react";
import "./App.css";
import Home from "./pages/home";
import { Provider } from "react-redux";
import configureStore from "./state/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
}

export default App;
