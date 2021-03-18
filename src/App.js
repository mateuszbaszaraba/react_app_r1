import React, { Component } from 'react';
import Validation from './Validation/Validation';
import './App.css';

class App extends Component {
    state = {
        userInput: ''
    }

    inputChangedHandler = event => {
        this.setState({userInput: event.target.value});
    }
  render() {
    return (
      <div className="App">
          <h1>How you doin?</h1>
          <input type="text"
                 onChange={this.inputChangedHandler}
                 value={this.state.userInput}/>
          <p>{this.state.userInput}</p>

          <Validation userInput={this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;