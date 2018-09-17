import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter/Counter';
import { store } from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Counter />
      </Provider>
    );
  }
}

export default App;