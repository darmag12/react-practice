import React, { Component } from 'react';
import Validation from './components/Validation/Validation'
import Char from './components/Char/Char'
import './App.css';

class App extends Component {

  state = {
    charLength: 0,
    char: ''
  }

  LengthOutputHandler = (event) => {
    this.setState({
      charLength: event.target.value.length,
      char: event.target.value
    })
  }

  deleteCharHandler = (id) => {

    const newState = this.state.char.split('')
     newState.splice(id, 1);
     const updated = newState.join('');

    this.setState({
      charLength: updated.length,
      char: updated
    });
  }

 
  render() {
    const singleChar = this.state.char.split('').map((char, index) => {
      return (<Char character={char}
             key={index}
             delete={() => this.deleteCharHandler(index)}/>)
    })

    return (
      <div className="App">
        <input type="text" value={this.state.char} onChange={this.LengthOutputHandler}/>
        <p>{this.state.charLength}</p>
        <Validation charLength={this.state.charLength}/>
        {singleChar}
      </div>
    );
  }
}

export default App;
