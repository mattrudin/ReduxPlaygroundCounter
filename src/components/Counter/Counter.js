import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  incrementTwo = () => {
    this.props.dispatch({ type: 'INCREMENT_TWO' });
  }

  decrementTwo = () => {
    this.props.dispatch({ type: 'DECREMENT_TWO' });
  }

  render() {
    return (
      <div className='container' >
        <h2>Counter</h2>
        <div>
          <button className='button' onClick={this.decrementTwo}>-2</button>
          <button className='button' onClick={this.decrement}>-1</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.incrementTwo}>+2</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);