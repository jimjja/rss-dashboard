import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Home from './pages/home';
import configureStore from './state/configureStore';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
