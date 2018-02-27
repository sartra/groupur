import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
import UserMain from './UserMain'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      activeSess: false,
      userData: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.addGroup = this.addGroup.bind(this);
  }


  addGroup(){
    let value = document.getElementById('Group').value

    fetch('/add-group', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({value: value})
    })
    .then(e => {
      return e.json()
    })
    .then(data => {
      console.log(data)
    })
    .catch(e => 
      console.log(e))
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

    fetch(route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: user, password: password})
    })
    .then((res) => {
      let currentState = Object.assign(this.state);   //  does not copy memory address but data
      currentState.userMain = true;   
      currentState.userData = res;    // this res (response) from verifyuser has all the info of the user
      if (res) {this.setState(currentState)}
    });
  }

  // check wether there is cookie in the browser or not.
  // if not, render Login; if true, render UserMain
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
        return 
      }
      return res.json() // sessionController.verifyUser defines data's structure in its res.send(true)
    })
    .then((data) => { 
      let tempState = this.state;
      tempState.activeSess = data.status;
      this.setState(tempState);
    })
  }

  render() {
      return (
        <UserMain addGroup={this.addGroup} />
      )
  }
}

module.exports = App