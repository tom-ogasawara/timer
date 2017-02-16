import React, { Component } from 'react';
import './App.css';
import Clock from './clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return(
      <div className='App'>
        <div className='App-title'>Countdown to { this.state.deadline }</div>
        <div>
          <Clock
            deadline={ this.state.deadline }
          />
        </div>
        <input
          placeholder='new date'
          onChange={ e => this.setState({ newDeadline: e.target.value}) }
        />
        <button onClick={ () => this.changeDeadline() }>Submit</button>
      </div>
    );
  }
}

export default App;
