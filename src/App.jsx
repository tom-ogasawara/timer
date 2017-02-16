import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017'
    };
  }

  changeDeadline() {
    this.setState({deadline: 'New deadline'});
  }

  render() {
    return(
      <div className='App'>
        <div className='App-title'>Countdown to { this.state.deadline }</div>
        <div>
          <div className='clock-days'>1</div>
          <div className='clock-hours'>1</div>
          <div className='clock-minutes'>1</div>
          <div className='clock-seconds'>1</div>

        </div>
        <input placeholder='new date' />
        <button onClick={ () => this.changeDeadline() }>Submit</button>
      </div>
    );
  }
}

export default App;
