import React, { Component } from 'react';
import './App.css';
import Clock from './clock.jsx';
import { Form, FormControl, Button } from 'react-bootstrap';

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
        <Form inline>
          <FormControl
            className='deadline-input'
            placeholder='new date'
            onChange={ e => this.setState({ newDeadline: e.target.value}) }
          />
          <Button onClick={ () => this.changeDeadline() }>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
