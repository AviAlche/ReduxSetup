import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postfrom from './components/Postfrom';
import { Provider } from 'react-redux';
import store from './store.js';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>welcome to react</h1>
          </header>
          <Postfrom></Postfrom>
          <hr/>
          <Posts></Posts>
        </div>
      </Provider>
    );
  }
}

export default App;
