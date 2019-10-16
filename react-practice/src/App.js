import React, { Component } from 'react';
import UserOutput from './components/UserOutput/UserOutput'
import './App.css';

class App extends Component {

  state = {
    userName: 'Daryl Magera',
    age: 21,
    hair: 'black',
    gender: 'male'
  }

  userNameChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }
  render() {
    return (
      <div className="App">

        <UserOutput user={this.state.userName}
                    age={this.state.age}
                    hair={this.state.hair}
                    gender={this.state.gender}
                    changeName={this.userNameChangeHandler}
                    currentName={this.state.userName}/>
        
      </div>
    );
  }
}

export default App;
