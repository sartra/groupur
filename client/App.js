import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './Login';


// Stateful class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      // user: null,
      // password: null
      userMain: false,
      activeSes: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // check wether there is cookie in the browser or not.
  // if not, render Login; it true, render UserMain  (line 85)
  componentDidMount() { 
    fetch('/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then((res) => {
      if (res.status !== 200) {
        console.log(res)
        return 
      }
      return res.json() // sessionController.verifyUser defines data's structure in its res.send(true)
    })
    .then((data) => { 
      this.setState({activeSes: data})
    })
  }
  
  
  handleClick(e) {
    const user = document.getElementById('inputU').value;
    const password = document.getElementById('inputP').value;
    
    if (!user || !password) {
      return false
    }

    document.getElementById('inputU').value = null;
    document.getElementById('inputP').value = null;

    const buttonId = e.target.id;
    const route = (e.target.id === 'signI' ? '/login' : '/signup');
    console.log(route)

    
    fetch(route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: user, password: password})
    })
    .then((res) => {
      if (res) {this.setState({userMain: true})}
    });
  }

  addGroupToUser(e) {
    fetch('userroute', {   // have to define the route
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: user, password: password})
    });
  }

  render() {
   
   return (
    this.state.activeSes ? <UserMain /> : <Login handleClick={this.handleClick} /> 
   )
  }
}

module.exports = App
